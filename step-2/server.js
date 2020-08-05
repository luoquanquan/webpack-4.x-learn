const express = require('express')
const app = express()

app.get('/user', (request, response) => {
  console.log('接收到了请求~')
  response.json({name: 'quanquan'})
})

app.listen(3000, () => {
  console.log('have a good time ~')
})
