/*
 * @Author: hito hito@123.com
 * @Date: 2023-08-28 15:46:38
 * @LastEditors: hito hito@123.com
 * @LastEditTime: 2023-08-28 17:13:55
 * @FilePath: \chat\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },

  // devServer: {
  //   static: "./dist",
  // },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ],
          }
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}