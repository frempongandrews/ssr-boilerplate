import "babel-polyfill";

const express = require("express");
const React = require("react");
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import renderer from "../helpers/renderer";
import initStore from "../helpers/initStore";
import Routes from "../Routes";
const app = express();
const PORT = 3003;


app.use(express.static("public"));

//todo: change api endpoint depending on project
app.use("/api", proxy(`https://react-ssr-api.herokuapp.com/users`, {
    proxyReqOptDecorator: (opts) => {
        opts.headers["x-forwarded-host"] = "localhost:3000";
        return opts
    }
}));

app.get("*", (req, res) => {

    //load redux store data before sending html to client
    const store = initStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
       return route.loadData ? route.loadData(store) : null
   });

    //render app after all data fetching is completed
    Promise.all(promises)
        .then(() => {
            res.send(renderer(req, store));
        })
        .catch(err => {

        })


});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});