'use strict';

const net = require('net');
const fs = require('fs');

  //Once a connection is made a socket is made. (This is why it's a callback function)
var server = net.createServer((socket)=>{
  //This is header data sent to the user.
  console.log();
      socket.write('TCP/1.1 200');
      socket.write('Content-Type: text/plain');
      socket.write('Hello World');
  //This data represents any data coming back to the server from the client.
      socket.on('data', (data)=>{
        console.log('data received: ', data.toString());
      });
  //Creating a write stream and then piping the data within the socket into this stream.
      var file = fs.createWriteStream(__dirname + '/response-data/' + Date.now() + '.js');
      socket.pipe(file);
      socket.on('close', ()=>{
        socket.end();
        console.log('Socket is closed');
      });
}).listen(3000, ()=>{
  console.log('server started on port 3000');
});
