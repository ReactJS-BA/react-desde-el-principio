var config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
}

module.exports = config
