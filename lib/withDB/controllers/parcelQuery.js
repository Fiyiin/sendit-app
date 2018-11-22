import db from '../db';

class Parcel {
  static getAllParcels(req, res, next) {
    db.query('select * from parcels')
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
    db.query('select * from parcels WHERE id = $1', [parcelId])
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

  static CreateParcel(req, res) {
    req.body.weight = parseInt(req.body.weight, 10);
    db.query(`insert into parcels(name, description, pickup, delivery, 
      current_location, weight, receivers_name, receivers_no, status) 
    values($/name/, $/description/, $/pickupLocation/, $/deliveryLocation/, 
      $/weight/, $/receiversName/, $/receiversNumber/, $/status/)`,
    [req.body])
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Your Parcel order has been created!',
          });
      })
      .catch(err => console.log(err));
  }

  static cancelParcel(req, res, next) {
    db.query('UPDATE parcels SET status=$1 WHERE id=$2',
      [req.body.status, req.params.id])
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Your order has been cancelled',
          });
      })
      .catch(err => next(err));
  }

  static changeDestination(req, res, next) {
    db.none('UPDATE parcels SET destination=$1 WHERE id=$2',
      [req.body.changeDestination, +req.params.id])
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
