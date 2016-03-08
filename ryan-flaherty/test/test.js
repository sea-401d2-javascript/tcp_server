var expect = require('chai').expect;
var net = require('net');
require('../index.js');

describe('Testing TCP Server', () => {
  describe('The client connection', () => {
    var client;
    before(function() {
      client = net.connect(3000, function(){
        client.write('connect');
      });
    });
    it('should respond with "You\'re connection has been logged!"', (done) => {
      client.on('data', function(data){
        expect(data).to.eql('You\'re connection has been logged!');
      });
      client.write('connect');
      done();
    });
  });
});


