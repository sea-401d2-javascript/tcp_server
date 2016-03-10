'use strict';
var chai = require('chai');
var fs = require('fs');

var expect = chai.expect;
require( __dirname + '/../server.js');


describe('Testing TCP server if it is connecting', () => {
  var now = new Date();
  var nowWrite = now.toISOString();
  var time = now.getTime();
  var nowTime = '/log/' + time + '.txt';
  var path;

  before((done)=>{
    fs.writeFile( __dirname + '/' + nowTime, nowWrite, (err)=>{
      var pathArray = err.path.split('/');
      path = '/log/' + pathArray[9];
      console.log(pathArray);
      console.log(path);
      done();
    });
  });
  it('should create a file with time stamp', () =>{
    expect(path).to.eql(nowTime);
  });
});
