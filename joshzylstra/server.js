'use strict';
// we use 'net' for tcp
var fs = require('fs');
var net = require('net');

var server = net.createServer((socket) => {
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('Yeahhhhh buddyaye');
  socket.end();

  socket.on('data', (data) => {
    var newDate = new Date();
    fs.writeFile(newDate + '.txt', 'Socket connected on ' + newDate, (err) => {
      if (err) throw err;
      console.log('Connection Logged');
    });
  });

  socket.on('close', () => {
  socket.end();
  });
});

server.listen(3000, function(){
  console.log('server started on port 3000');
});
