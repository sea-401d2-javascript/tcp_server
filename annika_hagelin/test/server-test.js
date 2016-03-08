var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
// var fs = require('fs');

describe('server testing', () => {

  it('shoud connect to server', () => {
    chai.request('http://localhost:3000')
      .post('/plz')
      .attach('imageField', 'hjalp', 'avatar.png');

      console.log('made request');
  });

});
