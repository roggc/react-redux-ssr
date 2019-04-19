//webpack.config.js

var path = require('path');
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var clientConfig = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    })
  ],
  watchOptions: {
    ignored:
    [
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, 'node_modules')
    ]
  }
};

var serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "false"
    })
  ],
  watchOptions: {
    ignored:
    [
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, 'node_modules')
    ]
  }
}

module.exports = [clientConfig, serverConfig]
