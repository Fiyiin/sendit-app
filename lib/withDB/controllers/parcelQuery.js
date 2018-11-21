import promise from 'bluebird';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

class Parcel {
  static getAllParcels(req, res, next) {
    db.any('select * from parcels')
      .then((data) => {
        res.status(200)
          .json({
            status: 'success',
            data,
            message: 'Retrieved all parcels',
          });
      })
      .catch(err => next(err));
  }

  static getSingleParcel(req, res, next) {
    const parcelId = parseInt(req.params.id, 10);
    db.one('select * from parcels WHERE id = $1', parcelId)
      .then((data) => {
        res.status(200)
          .json({
            status: 'success',
            data,
            message: 'Retrieved one parcel',
          });
      })
      .catch(err => next(err));
  }

  static CreateParcel(req, res, next) {
    req.body.weight = parseInt(req.body.weight, 10);
    db.none(`insert into parcels(name, description, pickup, delivery, weight) 
    values($/name/, $/description/, $/pickup/, $/delivery/, $/weight/)`,
    req.body)
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Created!',
          });
      })
      .catch(err => next(err));
  }

  static cancelParcel(req, res, next) {
    db.none('UPDATE parcels SET status=$1 WHERE id=$2',
      [req.body.status, parseInt(req.params.id, 10)])
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Your order has been cancelled',
          });
      })
      .catch(err => next(err));
  }
}

export default Parcel;