var chai = require('chai');
var expect = require('chai').expect;
var server = require('../tcp-server');
chai.use(require('chai-http'));


describe('testing tcp-server.js', function() {
  it('testing / request and repsonse', function() {
    chai.request('http://localhost:3000').get('/')
    .then(function(res) {
      expect(res).to.have.status(200);
    }).catch(function(err) {throw err;});
  });
});
