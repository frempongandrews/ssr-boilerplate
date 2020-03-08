const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const path = require("path");

// console.log("**********FROM Webpack Base File");
// console.log(process.env.NODE_ENV);

const configureBaseConfig = () => {
    return {


        mode: process.env.NODE_ENV === "production" ? "production" : "development",
        devtool: `${process.env.NODE_ENV === "production" ? "source-map" : "cheap-module-source-map"}`,
        devServer: {
            contentBase: "./dist"
        },
        module: {
            rules: [
                {
                    test: /\.(js)x?$/,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },

                {
                    test: /\.s?(css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                //for debugging
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                //minify css
                                plugins: () => [require("cssnano")],
                                //for debugging
                                sourceMap: true
                            }
                        }
                    ]
                }
            ],
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css"
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            }),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        compress: {
                            drop_console: process.env.NODE_ENV === "production",
                        },
                    },
                }),
            ],
        },
    };
};

module.exports = configureBaseConfig;