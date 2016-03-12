'use strict';
var net = require('net');
var fs = require('fs');

var server = net.createServer( (socket) => { //socket is the connection that is sending and receiving data when the connection is received run the code below.
  var file = fs.createWriteStream('./' + new Date());
  socket.pipe(file);//piping info that browser is sending to server and writing that info to a file
  socket.on('end', () => {
    console.log('client disconnected');
  });
});

server.listen('3000', () => { //port server is listening on
  console.log('server running');
});
