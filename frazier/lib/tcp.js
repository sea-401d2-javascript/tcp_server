var net = require('net');
var fs = require('fs');
// var through = require('through');

var server = net.createServer((socket) => {
  // var concatenatedDataStream = 
  socket.on('data', (data) => {
    var today = new Date();
    // socket.write('HTTP/1.1 200');
    fs.writeFile(__dirname + '/../saved-requests/request' + today.toISOString(), data, (err) => {
      if (err) throw err;
      console.log('file written');
    });  
  });
  socket.on('close', () => {
    socket.end();
  });
  
});


server.listen(8000, () => {
  console.log('server started on 8000');
});
