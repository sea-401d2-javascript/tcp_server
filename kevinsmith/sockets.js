var net = require('net');
var fs = require('fs');


var server = net.createServer((connection) => {
  var writeStream = fs.createWriteStream('./output/' + logTime() + '.txt');
  connection.pipe(writeStream);
  connection.end(); 
  
  connection.on('data', (data) => {
    console.log(data.toString('utf-8'));
  }); //data

  connection.on('end', () => {
    console.log('bye!')
  }); //end
  
}); //server

server.listen(3000, () =>{
  console.log('server started!')
});


function logTime(){
  var d = new Date();
  var dateString = d.getMonth() + '-' +  d.getDate() + '-' +d.getYear() + '_' +d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  return dateString;
}


// net.createServer((socket) => {
//   socket.write('HTTP/1.1 200');
//   socket.write('Content-Type: text/plain');
//   socket.write('hello world');
//   socket.end();

// }).listen(3000)

// socket.on('data', (data) => {
// // write some data for every response
// })

// socket.on('close', () =>{
//   socket.end();
// })