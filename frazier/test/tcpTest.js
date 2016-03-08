var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);
// var frazier-tcp = require(__dirname +'/../lib/tcp.js');

describe('tcp.js', () => {
  it('should respond with a 200 status', (done)=> {
    chai.request('http://localhost:8000').get('/')
    .end((err, response)=> {
      // if (err) throw err;
      expect(err).to.be(null);
      expect(response).to.have.status(200);
    });
    
    
    done();
  });
});


describe('tcp-concat.js', () => {
  it('should respond with a 200 status', (done)=> {
    chai.request('http://localhost:8000').get('/')
    .end((err, response)=> {
      // if (err) throw err;
      expect(err).to.be(null);
      expect(response).to.have.status(200);
    });
    done();
  });
});
