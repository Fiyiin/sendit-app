'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parcel = function () {
  /**
   * class constructor
   * @param {object} data
   */
  function Parcel() {
    _classCallCheck(this, Parcel);

    this.parcels = [];
  }

  /**
   *
   * @returns {object} parcel object
   */


  _createClass(Parcel, [{
    key: 'create',
    value: function create(data) {
      var newParcel = {
        id: 1,
        name: data.name || '',
        description: data.description || '',
        pickup: data.pickup || '',
        delivery: data.delivery || '',
        weight: data.weight || '',
        username: data.username || '',
        createdAt: Date.now()
      };
      this.parcels.push(newParcel);
      return newParcel;
    }

    /**
     * @returns {object} returns all parcel orders
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.parcels;
    }

    /**
    *
    * @param {uuid} id
    * @returns {object} parcel object
    */

  }, {
    key: 'getOne',
    value: function getOne(id) {
      return this.parcels.find(function (parcel) {
        return parcel.id === id;
      });
    }

    /**
     *
     * @param {uuid} id
     */

  }, {
    key: 'cancel',
    value: function cancel(id) {
      var parcel = this.getOne(id);
      var index = this.parcels.indexOf(parcel);
      this.parcels.splice(index, 1);
      return {};
    }
  }]);

  return Parcel;
}();

exports.default = new Parcel();