'use strict';

const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('Hello World');

  socket.on('data', (data) => {
    var t = new Date();
    var reqTime =  t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    var fileName = t.getMonth()+1 + '-' + t.getDate() + '_' + reqTime.replace(/:/g, '-');
    console.log('data received');
    fs.writeFile(`./new_files/${fileName}.txt`, `New file written at ${reqTime}.`, 'utf8', (err) => {
      if (err) throw err;
      console.log('New file created.');
    });
  });

  socket.on('close', () => {
    socket.end();
  });
});

server.listen(3000, () => {
  console.log('Server Started');
});
