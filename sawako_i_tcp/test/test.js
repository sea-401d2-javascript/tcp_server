'use strict';
var expect = require('chai').expect;
// var chaihttp = require('chai-http');

// chaihttp.use(chaihttp);

describe('Testing TCP server if it is connecting', () => {
  it('should send response of status 200', () =>{
    chaihttp.request('http://localhost3000')
    .get('/')
    .then((socket) =>{
      expect(socket).to.have.status(300);
    });
  });
});
