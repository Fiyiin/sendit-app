'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParcelModel = function () {
  /**
   * class constructor
   * @param {object} data
   */
  function ParcelModel() {
    _classCallCheck(this, ParcelModel);

    this.parcels = [];
  }

  /**
   *
   * @returns {object} parcel object
   */


  _createClass(ParcelModel, [{
    key: 'createNewOrder',
    value: function createNewOrder(data) {
      var newParcel = {
        id: _uuid2.default.v4(),
        name: data.name || '',
        description: data.description || '',
        pickup: data.pickup || '',
        delivery: data.delivery || '',
        weight: data.weight || '',
        createdAt: Date.now()
      };
      this.parcels.push(newParcel);
      return newParcel;
    }

    /**
     * @returns {object} returns all parcel orders
     */

  }, {
    key: 'getAllParcels',
    value: function getAllParcels() {
      return this.parcels;
    }

    /**
    *
    * @param {uuid} id
    * @returns {object} parcel object
    */

  }, {
    key: 'getParcelById',
    value: function getParcelById(id) {
      return this.parcels.find(function (parcel) {
        return parcel.id === id;
      });
    }

    /**
     *
     * @param {uuid} id
     */

  }, {
    key: 'cancelOrder',
    value: function cancelOrder(id) {
      var parcel = this.getOne(id);
      var index = this.parcels.indexOf(parcel);
      this.parcels.splice(index, 1);
      return {};
    }
  }]);

  return ParcelModel;
}();

exports.default = new ParcelModel();