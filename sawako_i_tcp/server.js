'use strict';
const net = require('net');
const fs = require('fs');


net.createServer((socket) => {
//creating date and time created here
  var now = new Date();
  var nowWrite = now.toISOString();
  var time = now.getTime();
  var nowTime = 'log/' + time + '.txt';

//uses the instance of time and date to create a file and write in it
  socket.on('end', () =>{
    fs.writeFile( __dirname + '/' + nowTime, nowWrite, (err)=>{
      if(err){
        console.log('Your data is not written anywhere..' + err);
      } else {
        console.log(nowTime + ' is wrote in a file');
      }
    });
  });

  socket.end();
}).listen(3000, () =>{
  console.log('server started!');
});
