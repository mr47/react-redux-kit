'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var historyApiFallback = require('connect-history-api-fallback')
var sassLoaders = [
    "style",
    "css?sourceMap",
    "postcss",
    "sass?sourceMap"
];

var sassLoadersWithModules = [
    "style",
    "css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]",
    "postcss",
    "sass?sourceMap"
];

var cssLoaders = [
    "style",
    "css?sourceMap",
    "postcss"
];

var appStylesRegExp = /styles\.scss/;

module.exports = {

    output: {
        path: path.resolve(__dirname, "tmp"),
        filename: 'index.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    entry: [
        './demo/app.js'
    ],

    resolve: {
        extensions: ['', '.js', '.scss', '.css'],
        modulesDirectories: ["node_modules", "./src"]
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
                loader: sassLoaders.join("!")
            },
            {
                test: /\.scss/,
                exclude: [appStylesRegExp],
                loader: sassLoadersWithModules.join("!")
            },
            {
                test: /\.css/,
                loader: cssLoaders.join("!")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        //new webpack.HotModuleReplacementPlugin(), see https://github.com/webpack/webpack-dev-server/issues/87
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'NODE_ENV': JSON.stringify('development')
        }),
        new webpack.ProvidePlugin({
            "_": "lodash",
            Promise: "bluebird"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('demo', 'index.tpl.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/',
            middleware: [ historyApiFallback() ]
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        }),
        new webpack.NoErrorsPlugin()
    ]

};
