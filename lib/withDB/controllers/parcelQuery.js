import db from '../db';

class Parcel {
  /**
   * Create A Parcel Order
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  static async createParcel(req, res) {
    req.body.weight = parseInt(req.body.weight, 10);
    console.log(req.user.id, 'result.........')
    const createQuery = `INSERT INTO 
    parcels(user_id, name, description, pickup, delivery, current_location, weight, 
      receivers_name, receivers_no, status) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

    const values = [
      req.user.id,
      req.body.name,
      req.body.description,
      req.body.pickup,
      req.body.delivery,
      req.body.current_location,
      req.body.weight,
      req.body.receivers_name,
      req.body.receivers_no,
      req.body.status,
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      return res.status(201).json(rows[0]);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  /**
   * Get All Parcel Orders
   * @param {object} req
   * @param {object} res
   * @returns {object} parcels array
   */
  static async getAllParcels(req, res) {
    const findAllQuery = 'SELECT * FROM parcels where user_id = $1';
    try {
      const { rows, rowCount } = await db.query(findAllQuery, [req.user.id]);
      return res.status(200).json({ rows, rowCount });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  /**
   * Get A Parcel Order
   * @param {object} req
   * @param {object} res
   * @returns {object} parcel object
   */
  static async getSingleParcel(req, res) {
    const text = 'SELECT * FROM parcels WHERE id = $1 AND owner_id = $2';
    try {
      const { rows } = await db.query(text, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).json({ message: 'Parcel not found' });
      }
      return res.status(200).json(rows[0]);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  /**
   * Cancel A Parcel
   * @param {object} req
   * @param {object} res
   * @returns {json} cancelled parcel
   */
  static async cancelParcel(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id = $2';
    const updateOneQuery = 'UPDATE parcels SET status=$1 WHERE id=$2 AND user_id = $3 returning *';
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).json({ message: 'Parcel not found' });
      }
      const values = [
        req.body.status,
        req.params.id,
        req.user.id,
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).json(response.rows[0]);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  /**
   * Change A Parcel's Destination
   * @param {object} req
   * @param {object} res
   * @returns {json} updated parcel
   */
  static async changeDestination(req, res) {
    const findOneQuery = 'SELECT * FROM parces WHERE id=$1 AND user_id = $2';
    const updateOneQuery = 'UPDATE parcels SET current_location=$1 WHERE id=$2 AND user_id = $3 returning *';
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).json({ message: 'Parcel not found' });
      }
      const values = [
        req.body.status,
        req.params.id,
        req.user.id,
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).json(response.rows[0]);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default Parcel;
