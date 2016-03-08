'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;
require(__dirname + '/../server.js');
var client = require(__dirname + '/../client.js');

describe ('does it write client data to file', function(){
  var contents;
  var lastFile;
  before(function(done) {
    client;
    fs.readdir(__dirname + '/../log', (err, files) => {
      files.sort();
      lastFile = files[files.length - 1];
    });
    done();
  });
  fs.readFile(__dirname + '../log/' + lastFile, (err, data)=> {
    contents = data;
    console.log(data);
  });
  it('receive client data and writes to file', () => {
    expect(contents).to.eql('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/u.46.0 Accept: */*')
  });

});
