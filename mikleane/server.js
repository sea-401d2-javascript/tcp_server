var fs = require('fs');
var net = require('net');
var time = new Date().getTime();

// RAW TCP SERVER - simulating http on tcp
var server = net.createServer((connection) => {
  connection.on('data', (data) => {
    console.log(data.toString('utf-8'))
    fs.writeFile(__dirname + '/requests' + time + '.txt', data)
});

connection.on('end', () => {
  console.log('bye!')
  });
});

server.listen(3000, () => {
  console.log('server has started')
});
