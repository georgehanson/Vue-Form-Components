module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/
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
            vue: 'vue/dist/vue.esm.js'
        }
    }
};
