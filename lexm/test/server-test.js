'use strict';

const net = require('net');
const expect = require('chai').expect;
const server = require(__dirname + '/../server.js');

describe('testing createUniqueName', function() {
  it('should be two different names', function() {
    var name1 = server.createUniqueName();
    expect(name1).to.not.equal(server.createUniqueName());
  })
})
