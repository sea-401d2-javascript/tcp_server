var expect = require('chai').expect;
var net = require('net');
var fs = require('fs');
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
  describe('Logging the connection', () => {
    var client;
    before(function() {
      client = net.connect(3000, function(){
        client.write('connect');
      });
    });
    it('Qty of logs should be 1 more than original count', (done) => {
      var fileCount = fs.readdirSync('../');
      client.on('data', function(data){
        var fileCount2 = fs.readdirSync('../');
        expect(fileCount2).to.eql(fileCount + 1);
      });
      client.write('connect');
      done();
    });
  });
});


