'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parcel = require('../models/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parcel = function () {
  function Parcel() {
    _classCallCheck(this, Parcel);
  }

  _createClass(Parcel, null, [{
    key: 'createNewOrder',

    /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} Parcel object
     */

    value: function createNewOrder(req, res) {
      var parcel = _parcel2.default.createNewOrder(req.body);
      return res.status(201).send(parcel);
    }

    /**
     *
     * @param {object} req
     * @param {object} res
     * @param {object} orders array
     */

  }, {
    key: 'getAllParcels',
    value: function getAllParcels(req, res) {
      var parcels = _parcel2.default.getAllParcels();
      return res.status(200).send(parcels);
    }

    /**
     *
     * @param {object} req
     * @param {object} res
     * @return {object} returns order object
     */

  }, {
    key: 'getParcelById',
    value: function getParcelById(req, res) {
      var parcel = _parcel2.default.getParcelById(req.body.id);
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

  }, {
    key: 'cancelOrder',
    value: function cancelOrder(req, res) {
      var order = _parcel2.default.getOne(req.body.id);
      if (!order) {
        return res.status(404).send({ message: 'parcel not found ' });
      }
      var id = _parcel2.default.cancelOrder(req.params.id);
      return res.status(204).send(id);
    }
  }]);

  return Parcel;
}();

exports.default = Parcel;