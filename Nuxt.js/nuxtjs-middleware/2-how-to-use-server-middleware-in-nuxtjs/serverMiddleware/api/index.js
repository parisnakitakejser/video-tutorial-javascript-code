const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World - Express.js API')
})
app.get('/hello', function (req, res) {
  res.send('Path: /hello - Express.js API')
})

module.exports = app
