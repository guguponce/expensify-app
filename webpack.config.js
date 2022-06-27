const path = require('path');
module.exports = {
  mode: 'development',
  entry: ["babel-polyfill","./src/app.js"],
  output: {
    // path: path.join(__dirname, "public", "dist"),
    // filename: "bundle.js"
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
      test: /\.(jpg|png|svg|gif)$/,
      type: 'asset/resource',
    }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public', "dist"),
    },
    // historyApiFallback: true,
    compress: true,
    port: process.env.PORT || 3000,
  },
}


// //dev-server:
//
// const path = require('path');
//
// module.exports = {
//   mode: 'development',
//   entry: ["babel-polyfill","./src/app.js"],
//   output: {
//     path: path.join(__dirname, "/public/dist"),
//       // path: path.resolve(__dirname, "public", "dist"),
//     filename: "bundle.js",
//     publicPath: "/"
//   },
//   module: {
//     rules: [{
//       loader: 'babel-loader',
//       test: /\.js$/,
//       exclude: /node_modules/
//     },{
//       test: /\.s?css$/,
//       use: ["style-loader", "css-loader", "sass-loader"],
//     },
//     {
//       test: /\.(jpg|png|svg|gif)$/,
//       type: 'asset/resource',
//     }
//     ]
//   },
//   devtool: "eval-cheap-module-source-map",
//   devServer: {
//     historyApiFallback: true,
//     static: {
//       directory: path.join(__dirname, '/public'),
//       // directory: path.join(__dirname, "public","dist"),
//     },
//     compress: true,
//     port: process.env.PORT || 3000,
//   },
//   watch: true,
//   watchOptions: {
//     aggregateTimeout: 200,
//     poll: 1000,
//   },
// }
