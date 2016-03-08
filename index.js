'use strict';

const net = require('net');
const fs = require('fs');

var server = net.createServer((socket)=>{
  socket.write('TCP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('Hello World');
  socket.on('data', (data)=>{
    console.log('data received: ', data.toString());
  });
  var file = fs.createWriteStream(__dirname + '/response-data/' + Date() + '.js';
  socket.pipe(file);
  socket.on('close', ()=>{
    socket.end();
    console.log('Socket is closed');
  });
}).listen(3000, ()=>{
  console.log('server started on port 3000');
});
