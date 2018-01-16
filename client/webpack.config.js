const path = require('path')

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]     
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'ts', 'tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
