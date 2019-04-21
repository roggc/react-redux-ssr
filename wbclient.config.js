//wbclient.config.js

var path = require('path');

module.exports =
{
  entry:'./src/client.js',
  output:
  {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  watchOptions:
  {
    ignored:
    [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'node_modules')
    ]
  }
};
