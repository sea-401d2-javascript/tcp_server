var net = require('net');

var client = net.connect(3000, () => {
  client.write('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/u.46.0 Accept: */*\r\n')
});

client.on('data', (data) => {
  console.log(data)
});

client.on('end', () => {
  console.log('connection done')
});
