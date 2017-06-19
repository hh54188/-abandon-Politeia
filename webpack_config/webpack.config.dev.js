'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: {
        read: './src/scripts/vue_entry/read.main.js'
    },
    output: {
        path: path.resolve(__dirname, '../releases/scripts/vue_output'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            }            
        ]
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.css', '.less', '.vue'],
        alias: {
            // Script:
            components: path.resolve(__dirname, '../src/scripts/components/'),
            stores: path.resolve(__dirname, '../src/scripts/stores/'),
            modules: path.resolve(__dirname, '../src/scripts/moduels/'),
            // Style:
            includes: path.resolve(__dirname, '../src/styles/includes'),
            styles: path.resolve(__dirname, '../src/styles')
        }
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "commons",
        //     filename: "commons.js",
        // })
    ]    
};