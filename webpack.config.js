//webpack.config.js

var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        options:
        {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
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

var serverConfig = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        options:
        {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
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

module.exports = [browserConfig, serverConfig]
