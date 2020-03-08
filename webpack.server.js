const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const nodeExternals = require('webpack-node-externals');


// console.log("**********FROM server webpack File: process.env.NODE_ENV");
// console.log(process.env.NODE_ENV);

const serverConfig = {
    target: "node",
    entry: path.join(__dirname, "src/server/server.js"),
    output: {
        filename: "server_bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        // minimizer: [new UglifyJsPlugin()],
    },
    externals: [nodeExternals()]

};

module.exports = merge([baseConfig(), serverConfig]);
