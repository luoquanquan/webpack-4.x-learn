const express = require('express')
const app = express()

app.get('/api/user', (request, response) => {
  response.json({name: 'quanquan'})
})

app.listen(3000, () => {
  console.log('have a good time ~')
})
