'use strict';

const fs = require('fs');
const net = require('net');
const moment = require('moment');

var createUniqueName = function() {
  return moment().format('YYYY-MM-DDTHH:mm:ss.SSSSSS') + '.log';
}

exports.createUniqueName = createUniqueName;

var server = net.createServer( (socket) => {
  var saveLog = '';
  var logName = createUniqueName();
  socket.write('HTTP/1.1 200\n');
  socket.write('Content-Type: text/plain\n');
  socket.write('What\'s up?\n');
  socket.on('data', function(data) {
    saveLog += data.toString('utf-8');
  });
  socket.on('end', function() {
    fs.writeFile(__dirname + '/log/' + logName, saveLog);
    console.log(saveLog);
    console.log('see ya!');
  })
}).listen(3000);
