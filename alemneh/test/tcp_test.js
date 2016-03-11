const chai = require('chai');
const expect = chai.expect;
const should = require('chai').should;
const chaiHttp = require('chai-http');
const tcp = require('../tcp_server.js');
const net = require('net');

chai.use(chaiHttp);

describe('tcp server', () => {
  describe('server connection', () => {
    it('should return a status code of 200', (done) => {
      var server = net.connect({ port: 3000 },
        function() {
          server.write('hello world');
        }
      );

      server.on('data', function(data) {
        var statusCode = data.toString('ascii', 9,12);
        console.log(statusCode);

        expect(statusCode).to.equal('200');
        server.end();
        done();
      });
    });
  });
});
