'use strict';

const net = require('net');
const fs = require('fs');


net.createServer((socket) => {
  console.log('server is connected');

  socket.on('data',(data) => {
    fs.writeFile(__dirname + '/server-logs/' + Date.now() + '.txt', 'This file was created on ' + Date());
    console.log('data ' + data);
  });
  socket.on('close',() => {
    console.log('Server is closed');
    socket.end();
  });
}).listen(3000);
console.log('Server is listening ');
