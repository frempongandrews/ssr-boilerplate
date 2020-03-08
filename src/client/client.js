import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { renderRoutes } from "react-router-config";
import Routes from "../Routes";
import reducers from "../reducers/allReducers";

const axiosInstance = axios.create({
    baseURL: "/api" // axios.get("/users") => axios.get("/api/users")
});

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();


const store = createStore(reducers, window.INITIAL_STATE, devToolsExtension(applyMiddleware(thunk.withExtraArgument(axiosInstance))));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root"));