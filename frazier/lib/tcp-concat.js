var net = require('net');
var fs = require('fs');
// var stream = require('stream');
// var through = require('through');

var server = net.createServer((socket) => {
  console.log('connection made');
  var today = new Date();
  var path = __dirname + '/../saved-requests/request' + today.toISOString();
  var requestFSWriteStream = fs.createWriteStream(path);
  
  socket.on('data', (data) => {
    console.log('socket received data');
    requestFSWriteStream.write(data); 
  });
  
  socket.on('close', () => {
    console.log('socket closed');
    socket.end();
  });  
  
});

server.listen(8000, () => {
  console.log('server started on 8000');
});
