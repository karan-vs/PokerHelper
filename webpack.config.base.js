const webpack = require('webpack');
const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Used to avoid importing React explicitly when using JSX
const provide = new ProvidePlugin({
    React: 'react'
})

const extractCss = new ExtractTextPlugin({
    filename: '[name].css?v=[sha512:contenthash:base64:10]',
    ignoreOrder: true,
    allChunks: true
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'public/index.html'
});

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?/,
            include: APP_DIR,
            loader: 'babel-loader'
        },
        {
            test: /\.(scss|css)$/,
            use: ['css-loader', 'sass-loader']
        },
        {
            test: /\.(scss|css)$/,
            use: extractCss.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        provide,
        extractCss,
        htmlWebpackPlugin
    ]
};

module.exports = config;