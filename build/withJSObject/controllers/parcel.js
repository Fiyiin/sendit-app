'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parcel = require('../models/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parcel {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Parcel object
   */

  static createNewOrder(req, res) {
    const parcel = _parcel2.default.createNewOrder(req.body);
    return res.status(201).send(parcel);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @param {object} orders array
   */
  static getAllParcels(req, res) {
    const parcels = _parcel2.default.getAllParcels();
    return res.status(200).send(parcels);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} returns order object
   */
  static getParcelById(req, res) {
    const parcel = _parcel2.default.getParcelById(req.body.id);
    if (!parcel) {
      return res.status(404).send({ message: 'parcel not found' });
    }
    return res.status(200).send(parcel);
  }

  /**
  *
  * @param {object} req
  * @param {object} res
  * @returns {void} return status code 204
  */
  static cancelOrder(req, res) {
    const order = _parcel2.default.getOne(req.body.id);
    if (!order) {
      return res.status(404).send({ message: 'parcel not found ' });
    }
    const id = _parcel2.default.cancelOrder(req.params.id);
    return res.status(204).send(id);
  }
}

exports.default = Parcel;