/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');

const cipher = require('../../../app/helpers/cipher');
const app = require('../../../app/app');

const route = '/api/student';
const studentInfoMock = {
  name: 'Student Name',
  gender: 'male',
  country: 'Japan',
  email: 'email@email.com',
};

describe('# route /api/student ', () => {
  describe(`## GET ${route}`, () => {
    it('should failed with 404 status', (done) => {
      request(app)
        .get(`${route}`)
        .expect(404)
        .end(done);
    });
  });

  describe(`## POST ${route}`, () => {
    describe('with invalid data in request body', () => {
      it('should failed with 400 status and a json with error messages', (done) => {
        request(app)
          .post(`${route}`)
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
          data: cipher.encrypt(JSON.stringify({ ...data })),
        };
        request(app)
          .post(`${route}`)
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
          data: cipher.encrypt(JSON.stringify({ ...studentInfoMock })),
        };
        request(app)
          .post(`${route}`)
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
