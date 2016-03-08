'use strict';
const net = require('net');
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

net.createServer((socket) => {
//creating date and time created here
var now = new Date();
var nowWrite = now.toISOString();
var time = now.getTime();
var nowTime = 'log/' + time + '.txt';

//uses the instance of time and date to create a file and write in it
  emitter.emit('log',nowTime, nowWrite);
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.write('hello world');
  console.log('sever started!');
//ending server
  socket.end();
}).listen(3000);

//event emitter for creating file with time and date instance data
emitter.on('log', (nowTime, nowWrite) =>{
  fs.writeFile( __dirname + '/' + nowTime, nowWrite, (err)=>{
    if(err){
      console.log('Your data is not written anywhere..' + err);
    } else {
      console.log(nowTime + ' is wrote in a file')
    }
  });
});
