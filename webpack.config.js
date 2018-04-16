const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Web',
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /src/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}