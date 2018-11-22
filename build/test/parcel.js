'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('API tests', function () {
  var parcel = {
    id: '1',
    name: 'Brown Box',
    description: 'Leave me alone',
    pickup: 'Sabo',
    delivery: 'Yaba',
    username: 'Isamami',
    weight: '3g'
  };
  var parcel2 = {
    id: 1,
    name: 'Brown Box',
    description: 'Handle with care',
    pickup: 'Ikeja',
    delivery: 'Yaba',
    username: 'Ipali',
    weight: '4kg'
  };

  describe('#POST api/v1/parcels', function () {
    it('creates a new parcel order', function (done) {
      (0, _supertest2.default)(_app2.default).post('/api/v1/parcels').send(parcel).expect(201).end(function (err, res) {
        (0, _chai.expect)(res.body).to.include({ name: 'Brown Box' });
        (0, _chai.expect)(res.body).to.have.property('weight');
        (0, _chai.expect)(res.body).to.have.property('pickup', 'Sabo');
        done();
      });
    });
  });

  describe('#GET api/v1/parcels', function () {
    it('returns all parcels', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/v1/parcels').end(function (err, res) {
        (0, _chai.expect)(res.statusCode).to.equal(200);
        (0, _chai.expect)(res.body).to.be.an('array');
        done();
      });
    });
  });
});