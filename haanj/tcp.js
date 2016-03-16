'use strict';
const fs = require('fs');
const net = require('net');

var server = net.createServer(function(connection) {
  connection.on('data', function(data) {
    let timeStamp = new Date();
    writeLog(data, timeStamp.toString());
  });

  connection.on('end', function() {
    console.log('bye!');
  });
});


server.listen(3000, function() {
  console.log('server started');
});

function writeLog(data, timeStamp){
  let message = 'Connection made at: ' + timeStamp + '\n' +
  'data: ' + data;
  timeStamp = timeStamp.replace(/\s+/g, '-'); // removes spaces
  let newFileDirectory = __dirname + '/logs/'+ timeStamp +'.txt';

  fs.writeFileSync(newFileDirectory, message);
  return newFileDirectory;
}


module.exports = writeLog;
