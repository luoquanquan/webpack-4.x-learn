const {merge} = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    },
    before(app) {
      app.get('/user', (request, response) => {
        response.json({name: 'quanquan - before'})
      })
    }
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin({
      DEV: 'true'
    })
  ]
})
