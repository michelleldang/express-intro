const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/goodbye', function (req, res) {
  res.send('bye')
})

app.listen(3000)