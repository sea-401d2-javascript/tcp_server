'use strict';

const fs = require('fs');
const server = require('./../lib/server').server;
const Client = require('./../lib/client').Client;
const assert = require('chai').assert;

var testTime;
var latestFile;

describe('Test creation of log file', () => {
  before(() => {
    testTime = new Date().getTime();
    Client();
    fs.readdir(__dirname + '/../logs/', (err, files) => {
      if (err) throw err;
      files.sort();
      latestFile = files[files.length - 1].slice(0, 13);
      latestFile = parseInt(latestFile);
    });
  });

  it('should create a new log file in /logs', () => {
    assert.isAtLeast(testTime, latestFile);
  });
});

//1457464954309.log
