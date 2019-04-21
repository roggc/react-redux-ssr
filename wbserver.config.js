//wbserver.config.js

var path= require('path');
var nodeExternals = require('webpack-node-externals');

module.exports=
{
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
  output:
  {
    path: path.join(__dirname,'dist'),
    filename: 'index.js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
