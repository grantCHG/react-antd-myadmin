var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var distPath = path.join(__dirname, 'dist');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: distPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css?$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less?$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":true}'
                ],
                include: __dirname
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: __dirname
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url',
                query: { limit: 10240 }
            }
        ]
    }
};