'use strict';

const fs = require('fs');
const net = require('net');
const expect = require('chai').expect;
const server = require(__dirname + '/../server.js');
const moment = require('moment');

describe('testing createUniqueName', function() {
  it('should be two different names', function() {
    var name1 = server.createUniqueName();
    expect(name1).to.not.equal(server.createUniqueName());
  })
})

var logCount = 0;
var logCount2;

describe('testing log creation', function() {
  before(function(done) {
    logCount2 = fs.readdirSync(__dirname + '/../log/').length;
    done();
  })
  beforeEach(function(done) {
    var client = net.connect(3000, () => {
      client.write('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/7.46.0 Accept: */*\r\n');
      client.write('date/time is: ' + moment().format());
      client.end(function(){
        console.log(logCount2);
        done();
      });
    });
  })
  it('should not be the same', function() {
    logCount = fs.readdirSync(__dirname + '/../log/').length;
    console.log(logCount);
    expect(logCount).to.not.equal(fs.readdirSync(__dirname + '/../log/').length);
  })
  after('cleaning out log directory', function(){

  })
})
