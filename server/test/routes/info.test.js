/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');

const secure = require('../../utils/secure');
const server = require('../../server');

const studentInfoMock = {
  name: 'Student Name',
  gender: 'male',
  country: 'Japan',
  email: 'email@email.com',
};

describe('# route /api/info ', () => {
  describe('## GET /api/info', () => {
    it('should failed with 404 status', (done) => {
      request(server)
        .get('/api/info')
        .expect(404)
        .end(done);
    });
  });

  describe('## POST /api/info', () => {
    describe('with invalid data in request body', () => {
      it('should failed with 400 status and a json with error messages', (done) => {
        request(server)
          .post('/api/info')
          .expect(400)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body).to.exist;
            expect(res.body).to.have.property('error');
            expect(res.body).to.have.nested.property('error.name');
            expect(res.body).to.have.nested.property('error.statusCode');
            expect(res.body).to.have.nested.property('error.messages');
          })
          .end(done);
      });


      it('should failed with 422 status and a json with error message, POST a student with encrypted data missing name field', (done) => {
        const { name, ...data } = studentInfoMock;
        const encryptedData = {
          data: secure.encrypt(JSON.stringify({ ...data })),
        };
        request(server)
          .post('/api/info')
          .send(encryptedData)
          .expect(422)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body).to.exist;
            expect(res.body).to.have.property('error');
            expect(res.body).to.have.nested.property('error.name');
            expect(res.body).to.have.nested.property('error.statusCode');
            expect(res.body).to.have.nested.property('error.messages');
          })
          .end(done);
      });
    });

    describe('with valid data in request body', () => {
      it('should return OK status, POST a student with encrypted data', (done) => {
        const encryptedData = {
          data: secure.encrypt(JSON.stringify({ ...studentInfoMock })),
        };
        request(server)
          .post('/api/info')
          .send(encryptedData)
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body).to.exist;
            expect(res.body).to.have.property('data');
          })
          .end(done);
      });
    });
  });
});
