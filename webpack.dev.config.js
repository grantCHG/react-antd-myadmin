var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config');

baseConfig.devtool = 'cheap-module-eval-source-map';
baseConfig.entry.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client');
baseConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
);

module.exports = baseConfig;