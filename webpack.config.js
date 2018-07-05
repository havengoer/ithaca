const webpack = require('webpack');
const path = require('path');
const entry = [
  './client/index.js',
];

const output = {
  path: path.join(__dirname, 'public/build'),
  publicPath: 'public/build/',
  filename: 'webpack-bundle.js',
};

module.exports = {
  mode: 'development',
  entry, output,
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env','babel-preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
              sourceMap: true
          }
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
    }
    ],
  },
};    
          