import "babel-polyfill";

const express = require("express");
const React = require("react");
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import renderer from "../helpers/renderer";
import initStore from "../helpers/initStore";
import Routes from "../Routes";
const app = express();
const PORT = 3000;


//todo: change api endpoint depending on project
app.use("/api", proxy(`http://react-ssr-api.herokuapp.com`, {
    proxyReqOptDecorator: (opts) => {
        //todo: setting origin of requests(will change depending on project)
        opts.headers["x-forwarded-host"] = "localhost:3000";
        return opts;
    }
}));

app.use(express.static("public"));

app.get("*", (req, res) => {

    //load redux store data before sending html to client
    const store = initStore(req);

    const promises = matchRoutes(Routes, req.path)
    .map(({route}) => {
       return route.loadData ? route.loadData(store) : null
   })
    //render app after loading all data
    .map(promise => {
       if (promise) {
           return new Promise((resolve, reject) => {
               promise.then(resolve).catch(resolve);
           })
       }
    });

    //render app after all data fetching is completed
    Promise.all(promises)
        .then(() => {
            const context = {};

            const content = renderer(req, store, context);

            if (context.notFound) {
                res.status(404);
            }

            res.send(content);
        });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

});