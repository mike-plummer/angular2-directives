var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app/app.run.ts",
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [ /node_modules/, './src/app/views/index.html' ]
            }
        ]
    },
    plugins: [
        // Optimize IDs so that the resources that are most commonly referenced end up with the shortest Ids (reducing size)
        new webpack.optimize.OccurenceOrderPlugin(true),
        // Angular Betas (at least through Beta8) have issues with minification, so leave disabled for now
        //new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Angular2 Directives',
            template: 'src/app/views/index.html'
        })
    ],
    devServer: {
        port: 8000,
        host: 'localhost'
    }
};