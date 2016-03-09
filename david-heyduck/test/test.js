'use strict';

var chai = require('chai'),
    chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

describe('Testing my TCP Server response', ()=>{
  it('Should respond with a 200 status code', (done)=>{
    chai.request('http://localhost:3000').get('/')
    .end((err, response)=>{
      expect(err).to.be(null);
      expect(response).to.have.status(200);
    });
    done();
  });
});
