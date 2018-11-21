import uuidv4 from 'uuid/v4';
import promise from 'bluebird';
import dotenv from 'dotenv';
import Helper from './helpers';

dotenv.config();

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

const User = {
  /**
   * Create a user
   * @param {object} req
   * @param {object} res
   * @returns (object) user object
   */
  create(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'miss' });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).json({ message: 'email' });
    }
    const hashedPassword = Helper.hashedPassword(req.body.password);

    const { rows } = db.none(`insert into users(id, first_name, last_name, email, password, isAdmin) 
    values($1, $2, $3, $4, $5, $6) returning *`,
    [
      uuidv4(),
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      hashedPassword,
      req.body.isAdmin,
    ])
      .then(() => {
        const token = Helper.generateToken(rows[0].id);
        res.status(200)
          .json({
            status: 'success',
            token,
            message: 'Created!',
          });
      })
      .catch(err => next(err));
      return res.status(400)
          .json({
            error,
          });
    return res.status(201);
  },
  
}
