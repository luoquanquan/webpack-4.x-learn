const express = require('express')
const webpack = require('webpack')
const WDM = require('webpack-dev-middleware')
const wpConfig = require('./webpack.config')

const app = express()
const compiler = webpack(wpConfig)

app.use(WDM(compiler))

app.get('/user', (request, response) => {
  console.log('接收到了请求~')
  response.json({name: 'quanquan - server'})
})

app.listen(3000, () => {
  console.log('have a good time ~')
})
