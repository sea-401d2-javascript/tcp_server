'use script';

var fs = require('fs');
var net = require('net');
var port = process.env.PORT || 3000;

net.createServer((socket) => {
  socket.write('You\'re connection has been logged!');
  socket.end();

  socket.on('data', (data) => {
    var newDate = new Date;
    fs.writeFile(newDate + '.txt', 'Socket connected on ' + newDate, (err) => {
      if (err) throw err;
      console.log('Connection Logged');
    });
  });

  socket.on('close', () => {
    socket.end();
  });

}).listen(port, () => {
  console.log('Server started on port ' + port);
});
