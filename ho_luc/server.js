'use strict'

const net = require('net');
var fs = require('fs');

exports.server = net.createServer((socket) => {
  socket.on('data', (data) => {
    var date = new Date();
    fs.writeFile('./requests/' + date + '.js', 'A request was received at: ' + date, (err) => {
      if (err) {throw err}
      console.log('Request saved.');
    })
  })

  socket.on('close', () => {
    socket.end();
  })
})

exports.server.listen(3000, () => {
  console.log('Server starting, listening on port 3000.');
})
