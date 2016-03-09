'use strict';

var fs = require('fs');
var expect = require('chai').expect;

require(__dirname + '/../tcp-server');
var client = require(__dirname + '/../client');

describe('Test the tcp-server', function(){
  var contents = 'initial data';
  var lastFile;
  before(function(done){
    client;
    fs.readdir(__dirname + '/../logs/', (err, files) => {
      files.sort();
      lastFile = files[files.length-1];
    })
    fs.readFile(__dirname + '/../logs/' + lastFile, (err, data) => {
      contents = data;
    })
    done();
  });
  it('should write a new file with a uniquie identifier based on clinet request', function(){
    console.log(contents);
    expect(contents).to.eql('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/7.46.0 Accept: */*')
  })
})
