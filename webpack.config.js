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
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                cacheDirectory: true,
                presets: [
                ['env', {
                    'modules': false,
                    'targets': {
                        'browsers': ['> 2%'],
                        uglify: true
                    }
                }]
                ],
                plugins: ['transform-object-rest-spread']
            }
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

    externals: [nodeExternals()]
};
