var net = require('net');
var fs = require('fs');

var server = net.createServer((socket) => {

  socket.on('data', (data) => {
    var d = new Date();
    var timestamp = d.getMonth() + '-' + d.getDate() + '-' + d.getFullYear() + '-at-' + d.getHours() + '-' + d.getMinutes() + '-' +d.getSeconds() + '-' +d.getMilliseconds();
    fs.writeFile('receipt/'+timestamp, data, (err) => {
      if (err) {
        console.log('write error');
        socket.write('HTTP/1.1 500');
        throw err;
      } else {
        console.log(data, ' written to ', 'receipt/'+timestamp);
        socket.write('HTTP/1.1 200');
        socket.write('Content-Type: text/plain');
      }
    });

  });

  socket.on('close', () => {
    socket.end();
    console.log('socket closed');
  });

}).listen(3000, () => {
  console.log('server speaking.');
});
