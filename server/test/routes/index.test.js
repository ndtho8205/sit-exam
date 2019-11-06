process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');

describe('# route /', () => {
  describe('## GET /', () => {
    it('should return OK status', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('should return an html', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .expect((res) => {
          expect(res.text).to.contain('Please enable it to continue.');
        })
        .end(done);
    });
  });
});
