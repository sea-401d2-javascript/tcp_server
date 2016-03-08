var fs = require('fs');
var net = require('net');

var tcpServer = net.createServer();

tcpServer.on('connection', (socket) => {
  console.log('connection is now set');

  socket.on('data', (data) => {
    date = new Date();
    fs.writeFile( __dirname + '/logs/' + date + 'data.txt', data, (error) => {
      console.log('data written');
      client.destroy();
    });
  });
});

tcpServer.listen(3000, function() {
  console.log('server is running now');
});
