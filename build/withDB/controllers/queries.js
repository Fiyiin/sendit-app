'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAllParcels;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var options = {
  promiseLib: _bluebird2.default
};

var pgp = require('pg-promise')(options);

var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

function getAllParcels(req, res, next) {
  db.any('select * from parcels').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all parcels'
    });
  }).catch(function (err) {
    return next(err);
  });
}