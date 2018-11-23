'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ParcelModel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.parcels = [];
  }

  /**
   *
   * @returns {object} parcel object
   */
  createNewOrder(data) {
    const newParcel = {
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
  getAllParcels() {
    return this.parcels;
  }

  /**
  *
  * @param {uuid} id
  * @returns {object} parcel object
  */
  getParcelById(id) {
    return this.parcels.find(parcel => parcel.id === id);
  }

  /**
   *
   * @param {uuid} id
   */
  cancelOrder(id) {
    const parcel = this.getOne(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels.splice(index, 1);
    return {};
  }
}

exports.default = new ParcelModel();