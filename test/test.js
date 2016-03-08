'use strict';
const fs = require('fs');
const expect = require('chai').expect;
const writeLog = require(__dirname + '/../tcp.js');


describe('test writeLog() in tcp.js', function() {
  it('writeLog(data, timeStamp) should return valid file directory', function(done) {
    let data = 'test_message';
    let timeStamp = new Date();
    let result = writeLog(data, timeStamp.toString());

    fs.exists(result, function(exists) {
      if(exists) {
        console.log('        the file exists');
        expect(true).to.be.true;
        fs.unlink(result);
      } else {
        console.log('        the file doesn\'t exist');
        expect(false).to.be.true;
      }
      done();
    });
  });
});
