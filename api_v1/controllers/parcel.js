import ParcelModel from '../models/parcel';

const Parcel = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Sendit object
   */
  create(req, res) {
    if (!req.body.name && !req.body.weight && !req.body.pickup
      && !req.body.delivery) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const order = ParcelModel.create(req.body);
    return res.status(201).send(order);
  },

};

export default Parcel;
