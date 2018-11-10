import uuid from 'uuid';

class Parcel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.parcels = [];
  }

  /**
   *
   * @returns {oblect} parcel object
   */
  create(data) {
    const newParcel = {
      id: uuid.v4(),
      name: data.name || '',
      description: data.description || '',
      pickup: data.pickup || '',
      delivery: data.delivery || '',
      weight: data.weight || '',
      username: data.username || '',
      createdAt: Date.now(),
    };
    this.parcels.push(newParcel);
    return newParcel;
  }

  /**
   * @returns {object} returns all parcel orders
   */
  getAll() {
    return this.parcels;
  }

  /**
  *
  * @param {uuid} id
  * @returns {object} parcel object
  */
  getOne(id) {
    return this.parcels.find(parcel => parcel.id === id);
  }

  /**
   *
   * @param {uuid} id
   */
  cancel(id) {
    const parcel = this.getOne(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels.splice(index, 1);
    return {};
  }
}

export default new Parcel();
