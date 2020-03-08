const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");


console.log("**********FROM Client webpack File: process.env.NODE_ENV");
console.log(process.env.NODE_ENV);

const clientConfig = {

    target: "web",
    entry: {
        path: path.join(__dirname, "src/client/client.js")
    },
    output: {
        filename: "client_bundle.js",
        path: path.resolve(__dirname, "public")
    },
    optimization: {
        // minimizer: [new UglifyJsPlugin()],
    },

};

module.exports = merge([clientConfig, baseConfig()]);