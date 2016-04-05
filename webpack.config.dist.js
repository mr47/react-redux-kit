"use strict";
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var sassLoaders = [
    "css?sourceMap",
    "postcss",
    "sass?sourceMap"
];

var sassLoadersWithModules = [
    "css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]",
    "postcss",
    "sass?sourceMap"
];

var cssLoaders = [
    "css?sourceMap",
    "postcss"
];

var appStylesRegExp = /styles\.scss/;

module.exports = {
    entry: {
        index: ["./src/index"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'NODE_ENV': JSON.stringify('production')
        }),
        new webpack.ProvidePlugin({
            "_": "lodash",
            Promise: "bluebird"
        }),
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.scss', '.css'],
        modulesDirectories: ["node_modules", "src"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            // allow modules and css to be loaded
            {
                test: /\.scss/,
                include: [appStylesRegExp],
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            },
            {
                test: /\.scss/,
                exclude: [appStylesRegExp],
                loader:  ExtractTextPlugin.extract("style-loader", sassLoadersWithModules.join("!"))
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", cssLoaders.join("!"))
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    externals: [
        {
            "lodash": {
                root: "_",
                commonjs2: "lodash",
                commonjs: "lodash",
                amd: "lodash"
            },
            "jquery": {
                root: "jQuery",
                commonjs2: "jquery",
                commonjs: "jquery",
                amd: "jquery"
            },
            "bluebird": {
                root: "bluebird",
                commonjs2: "bluebird",
                commonjs: "bluebird",
                amd: "bluebird"
            }
        }
    ],
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
