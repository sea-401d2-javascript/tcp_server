'use strict';

var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../tcp.js');
var request = require(__dirname + '/../client.js');

describe('tcp server write', () => {
  it('should write a new file containing request data', (done) => {
    var files2;
    request.request();

    fs.readdir(__dirname + '/../requests', (err, file) => {
      fs.readFile('./requests/' + file[file.length-1],(err,data) => {
        files2 = data.toString();
        expect(files2).to.eql('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/7.46.0 Accept: */*\r\n');
        done();
      })
    })
  })
});
