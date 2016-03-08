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
  socket.on('data', (data) => {
    saveLog += data.toString('utf-8');
  });
  socket.on('end', () => {
    fs.writeFile(__dirname + '/log/' + logName, saveLog);
  })
}).listen(3000, () => {
  console.log('server started');
});
