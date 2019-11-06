/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');

const route = '/api';

describe('# route /api ', () => {
  describe('## GET {$route}', () => {
    it('should return OK status', (done) => {
      request(app)
        .get(`${route}`)
        .expect(200)
        .end(done);
    });

    it('should return a json with message', (done) => {
      request(app)
        .get(`${route}`)
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
