var net = require('net');
var fs = require('fs');

var server = net.createServer((socket) => {

  socket.on('data', (data) => {
    var timestamp = (new Date()).getTime();
    console.log(timestamp);
    fs.write();
  });

  socket.on('close', () => {
    socket.end();
  })

}).listen(3000, () => {
  console.log('server speaking');
});
