import ParcelModel from '../models/parcel';


class Parcel {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Parcel object
   */

  static createNewOrder(req, res) {
    const parcel = ParcelModel.createNewOrder(req.body);
    return res.status(201).send(parcel);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @param {object} orders array
   */
  static getAllParcels(req, res) {
    const parcels = ParcelModel.getAllParcels();
    return res.status(200).send(parcels);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} returns order object
   */
  static getParcelById(req, res) {
    const parcel = ParcelModel.getParcelById(req.body.id);
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
    const order = ParcelModel.getOne(req.body.id);
    if (!order) {
      return res.status(404).send({ message: 'parcel not found ' });
    }
    const id = ParcelModel.cancelOrder(req.params.id);
    return res.status(204).send(id);
  }
}

export default Parcel;
