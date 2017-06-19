var path = require('path');
const webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
	},
    module: {
      rules: [
      {
        test: /\.scss$/,
        use: [{
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    hot: true, // Tell the dev-server we"re using HMR
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};