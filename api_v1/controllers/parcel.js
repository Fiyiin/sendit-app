import ParcelModel from '../models/parcel';

const Parcel = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Parcel object
   */
  create(req, res) {
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
    const parcel = ParcelModel.create(req.body);
    return res.status(201).send(parcel);
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @param {object} orders array
   */
  getAll(req, res) {
    const parcels = ParcelModel.getAll();
    return res.status(200).send(parcels);
  },

};

export default Parcel;