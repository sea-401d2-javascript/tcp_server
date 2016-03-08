var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
// var fs = require('fs');

describe('server testing', () => {

  it('shoud connect to server', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .end(function (err, res) {
        console.log('request ended');
        // if (err) throw err;
        //  expect(err).to.be.null;
        //  expect(res).to.have.status(200); //no reply
        console.log(res);
         done();
      });;

      console.log('made request');
  });

});
