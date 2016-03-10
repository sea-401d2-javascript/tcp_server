var net = require('net')
var fs = require('fs')
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString('utf-8'))
    fs.writeFile(__dirname + '/log/logs' + Date.now() + '.js', data, (err) => {
      if (err) throw err;
      console.log('Its saved!');
    });

  socket.on('end', function() {
    console.log('bye!')
  })
})
})

server.listen(3000, function() {
  console.log('server started')
})
