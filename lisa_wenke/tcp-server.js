'use strict';

const net = require('net');
const fs = require('fs');

net.createServer((socket) => {
  console.log('server is connected');
  fs.writeFile(__dirname + '/server-logs/' + Date.now() + Math.random());
  fs.createWriteStream(__dirname + '/server-logs/' + Date.now() + Math.random());
  socket.on('data',(data) => {
    console.log('data ' + data);
  });
  socket.on('close',() => {
    console.log('Server is closed');
    socket.end();
  });
}).listen(3000);
console.log('Server is listening ');
