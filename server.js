// Creating server for site

var express = require('express')
var app = express()

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

//listen for the server

app.listen(port, function(error){
  if(error){
    console.error('ERROR starting server!', error)
  } else{
    console.log('Server started successfully on port:', port)
  }
})