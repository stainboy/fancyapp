#!/usr/bin/env node

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('Server is up on :3000')
app.listen(3000)
