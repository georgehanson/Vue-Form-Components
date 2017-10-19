let webpack = require('webpack');
let path = require('path');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'build.js',
        publicPath: './dist'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    plugins: [
        new UglifyJSPlugin()
    ],

    externals: [nodeExternals()]
};
