'use strict'

const net = require('net');
var fs = require('fs');
var date = new Date();

var server = net.createServer((socket) => {
  // console.log(socket);
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('hello world');

  socket.on('data', (data) => {
    // console.log('A request was received, at ' + new Date);
    fs.writeFile('./requests/' + date + '.js', 'A request was received at ' + date, (err) => {
      if (err) {throw err}
      console.log('Request saved.');
    })
  })

  socket.on('close', () => {
    socket.end();
  })
})

server.listen(3000, () => {
  console.log('Server starting, listening on port 3000.');
})
