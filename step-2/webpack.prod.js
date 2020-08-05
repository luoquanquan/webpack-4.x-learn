const webpack = require('webpack')
const {merge} = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      DEV: 'false'
    })
  ]
})
