var net = require('net');
var fs = require('fs');

var server = net.createServer((socket) => {

  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('plz respond');

  console.log('connection');

  socket.on('data', (data) => {
    var d = new Date();
    var timestamp = d.getMonth() + '-' + d.getDate() + '-' + d.getFullYear() + '-at-' + d.getHours() + '-' + d.getMinutes() + '-' +d.getSeconds() + '-' +d.getMilliseconds();
    fs.writeFile('receipt/'+timestamp, data, (err) => {
      if (err) throw err;
      console.log(data, ' written to ', 'receipt/'+timestamp);
    });
  });

  socket.on('close', () => {
    socket.end();
  })

}).listen(3000, () => {
  console.log('server speaking.');
});
