'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parcel = {
  first_name: "Crocs",
  last_name: "Shoes",
  email: "Lago",
  password: "Abuja",
  isAdmin: "true"
};

describe('#POST api/v1/auth/signup', () => {
  it('creates a new parcel order', done => {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').send(parcel).expect(201).end((err, res) => {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });
});