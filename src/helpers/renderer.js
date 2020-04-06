import React from "react";
import  { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../Routes";


export default (req, store, context) => {
    const content = renderToString(

        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>

    );

    const html = `
    <html>
    <body>
        <head>
            <link rel="stylesheet" type="text/css" href="styles.css"/>
        </head>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${ serialize(store.getState()) }
        </script>
        <script src="client_bundle.js"></script>
        <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    </body>
    </html>
    `;
    return html;
}