'use strict'

var expect = require('chai').expect;
var net = require('net');
var server = require(__dirname + '/../server.js').server;

describe('Testing server port', function() {
  var port = '3000';
  //grabs the property off the server object connectionKey 
  var string = server._connectionKey[5] + server._connectionKey[6] + server._connectionKey[7] + server._connectionKey[8];

  it('should be 3000, by matching server connectionKey', function(done) {
    expect(string).to.equal(port);
    done();
  })
})
