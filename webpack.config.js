const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/app.js",
  output: {
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
    }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public', "dist"),
    },
    compress: true,
    port: process.env.PORT || 3000,
  },
}
