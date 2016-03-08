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
      } else {
        console.log('        the file doesn\'t exist');
        expect(false).to.be.true;
      }
      done();
    });
  });
});

/*
var fs = require('fs');
var gutil = require('gulp-util');

fs.exists('./www/index.html', function(exists) {
  if(exists) {
    //Show in green
    console.log(gutil.colors.green('File exists. Deleting now ...'));
    fs.unlink('./www/index.html');
  } else {
    //Show in red
    console.log(gutil.colors.red('File not found, so not deleting.'));
  }
});
*/
