'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(connection){
  connection.on('data', function(data){
    fs.writeFile(__dirname + '/requests/req-' + Date.now() + '.txt', data, 'utf8', function(){
      console.log('file saved');
    });
  })
  connection.on('end', function() {
    console.log('later')
  })
})

server.listen(3000, function(){
  console.log('server started')
})
