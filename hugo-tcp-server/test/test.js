'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var program = require(__dirname + '/../server.js');

chai.use(chaiHttp);



describe('test connection', () => {
  it('should return a status of 200', () => {
    chai.request('http//localhost:3000')
    .get('/')
    .then((res) => {
      expect(res).to.have.status(200);
    }, (err) => {
      throw err;
    });
  });
});
