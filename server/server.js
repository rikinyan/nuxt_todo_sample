// write by node.js

const express = require('express')
const server = express()
const port = 8000

server.get('/', function(req, res) {
  res.send('hello world!')
})

server.listen(port, function() {
  console.log("start listening")
})