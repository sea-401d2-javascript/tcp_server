var net = require('net');
var fs = require('fs');
var time = new Date().getTime();
console.log(time)

var server = net.createServer((socket) => {
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: plain/text');
  socket.end();
  socket.on('data', (data) => {
    fs.writeFile(__dirname + '/requests' + time + '.txt', data)
  });

  socket.on('end', () =>{
    console.log('bye!')
  })
});

server.listen(3000, () => {
  console.log('server started')
});
