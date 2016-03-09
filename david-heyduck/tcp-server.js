'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer((socket)=>{
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  // On any sort of connection, do something:
  socket.on('data', (data)=>{
    var date = new Date;
    fs.writeFile('./logs/clientdata(' + date + ').txt');
    console.log('Client Connected');
  });
    socket.on('close',()=>{
    socket.end();
  });
});

server.listen(3000, function(){
console.log('Server has started.');
});
