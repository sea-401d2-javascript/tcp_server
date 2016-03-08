'use strict';

const net = require('net');
var server = net.createServer( (socket) => {
  socket.write('HTTP/1.1 200\n');
  socket.write('Content-Type: text/plain\n');
  socket.write('What\'s up?\n');
  socket.on('data', function(data) {
    console.log(data.toString('utf-8'));
  });
  socket.on('end', function() {
    console.log('see ya!');
  })
}).listen(3000);
