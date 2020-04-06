import React from "react";

const NotFound = ({ staticContext = {} }) => {
    //context is received by al;l components as staticContext
    staticContext.notFound = true;
    return (
        <div>
            <h1>Not Found</h1>
        </div>
    )
};

export default {
    component: NotFound
}