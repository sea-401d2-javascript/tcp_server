'use strict';
var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
// var tcpServ = require(__dirname + './tcp-server.js');

chai.use(chaiHttp);

// chai.request('http://localhost:3000');

describe('tcp-server.js',() => {
  it('Should respond with 200 status ',(done) => {
    chai.request('http://localhost:3000').get('/')
    .end((err, res) => {
      expect(err).to.be(null);
      expect(res).to.have.status(200);
    });
    done();
  });
});
