const net = require('net');
const fs = require('fs');

var server = net.createServer( (socket) => {//Each time there is a connection
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain'); //header
  socket.write('hello world');//body


  socket.on('data', (data) => {
    var date = new Date();
    fs.writeFile(__dirname + '/log/data_log_' + date + '.txt', data);
    console.log('data' + date + '.txt was created');
  });

  socket.on('end', () => {
    var date = new Date();
    console.log(date + ' disconnected from server');
    socket.end();
  });
}).listen(3000, () => {
  console.log('server started');
});
