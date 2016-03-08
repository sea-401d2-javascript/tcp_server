'use strict';
const fs = require('fs');
const net = require('net');

var server = net.createServer(function(connection) {
  connection.on('data', function(data) {
    let timeStamp = new Date();
    let message = 'Connection made at: ' + timeStamp + '\n' +
                  'data: ' + data;
    let timeString = timeStamp.toString().replace(/s/g, '');
    fs.writeFileSync(__dirname + '/logs/'+ timeString +'.txt', message);
  });

  connection.on('end', function() {
    console.log('bye!');
  });
});


server.listen(3000, function() {
  console.log('server started');
});
