var net = require('net');
var fs = require('fs');

var server = net.createServer( (socket) => {

});

server.listen('3000', () =>{
  console.log('server running');
});
