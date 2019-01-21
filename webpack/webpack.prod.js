const webpack = require('webpack');
const merge = require('webpack-merge');
//代码压缩插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool:'source-map',
    plugins:[
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});