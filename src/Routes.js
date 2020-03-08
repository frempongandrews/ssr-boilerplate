import React from "react";
import HomePage from "./client/pages/HomePage";
import UsersListPage from "./client/pages/UsersListPage";
import App from "./client/pages/App";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },

            {
                ...UsersListPage,
                path: "/users",
            },
        ]
    },
]