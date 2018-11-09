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
   * @returns {oblect} order object
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
}

export default new Parcel();
