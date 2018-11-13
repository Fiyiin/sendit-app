'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parcel = require('../models/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parcel = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Parcel object
   */
  create: function create(req, res) {
    if (!req.body.name) {
      return res.status(400).send({ message: 'package name is required' });
    }
    if (!req.body.pickup) {
      return res.status(400).send({ message: 'pickup location is required' });
    }
    if (!req.body.delivery) {
      return res.status(400).send({ message: 'delivery location is required' });
    }
    if (!req.body.weight) {
      return res.status(400).send({ message: 'weight isrequired' });
    }
    var parcel = _parcel2.default.create(req.body);
    return res.status(201).send(parcel);
  },


  /**
   *
   * @param {object} req
   * @param {object} res
   * @param {object} orders array
   */
  getAll: function getAll(req, res) {
    var parcels = _parcel2.default.getAll();
    return res.status(200).send(parcels);
  },


  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} returns order object
   */
  getOne: function getOne(req, res) {
    var parcel = _parcel2.default.getOne(req.params.id);
    if (!parcel) {
      return res.status(404).send({ message: 'parcel not found' });
    }
    return res.status(200).send(parcel);
  },


  /**
  *
  * @param {object} req
  * @param {object} res
  * @returns {void} return status code 204
  */
  cancel: function cancel(req, res) {
    var order = _parcel2.default.getOne(req.params.id);
    if (!order) {
      return res.status(404).send({ message: 'parcel not found ' });
    }
    var id = _parcel2.default.cancel(req.params.id);
    return res.status(204).send(id);
  }
};

exports.default = Parcel;