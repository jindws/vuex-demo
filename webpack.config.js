const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions:[".js",".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins:[
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"development"'
          }
      }),
      new HtmlWebpackPlugin({template: './index.html'}),
    ]
}
