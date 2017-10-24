let webpack = require('webpack');
let path = require('path');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let nodeExternals = require('webpack-node-externals');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/index.ts', './src/vue-form-components.scss'],

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
                plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
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
        },
        {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    externals: [nodeExternals()],

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: '[name].css',
          allChunks: true,
      }),
    ]
};
