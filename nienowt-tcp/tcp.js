'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(connection){
  connection.on('data', function(data){
    console.log(data.toString('utf-8'))
    fs.writeFile(__dirname + '/requests/request-' + Date.now() + '.txt', data, 'utf8', function(){
      console.log('file saved');
    });
  })
  connection.on('end', function() {
    console.log('bye')
  })
})

server.listen(3000, function(){
  console.log('server started')
})
