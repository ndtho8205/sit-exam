/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');

const server = require('../../server');

describe('# route /api ', () => {
  describe('## GET /api', () => {
    it('should return OK status', (done) => {
      request(server)
        .get('/api')
        .expect(200)
        .end(done);
    });

    it('should return a json with message', (done) => {
      request(server)
        .get('/api')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).to.exist;
          expect(res.body).to.have.property('message');
        })
        .end(done);
    });
  });
});
