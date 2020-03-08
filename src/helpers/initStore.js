import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../reducers/allReducers";

export default (req) => {

    // console.log("*****************");
    // console.log(req.get("cookie"));

    const axiosInstance = axios.create({

        //todo: readjust url according to project
        baseURL: "https://react-ssr-api.herokuapp.com",
        headers: { cookie: req.get("cookie" || "")}
    });
    return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
};