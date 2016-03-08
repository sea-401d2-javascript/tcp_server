'use strict';

const net = require('net');
const expect = require('chai').expect;
const server = require(__dirname + '/../server.js');

describe('testing createUnique', function() {
  it('should be two different names', function() {
    var name1 = server.createUnique();
    expect(name1).to.not.equal(createUnique);
  })
})
