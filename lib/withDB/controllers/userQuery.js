import { Pool } from 'pg';
import Helpers from './helpers';
import Helper from './helpers';

const connectionString = process.env.DATABASE_URL;

class User {

  /**
   * @param {object} req
   * @param {object} res
   */
  static createUser(req, res) {
    const text = `SELECT email FROM users where email=$1`;
    const hashedPassword = Helper.hashedPassword(req.body.password);
    const newUser = `INSERT INTO users(first_name, last_name, email, password, isAdmin)
    VALUES($1, $2, $3, $4, $5) RETURNING *`;
    const values = [
      req.first_name,
      req.last_name,
      req.email,
      hashedPassword,
      false,
    ];
    const pool = new Pool(connectionString);
    pool.connect();
    pool.query(text, [req.body.email])
      .then((result) => {
        if (result.rows[0]) {
          return res.status(400).json({
            message: 'Email exists already'
          });
        }
        const pool = new Pool(connectionString);
        pool.query(newUser, values)
          .then((result) => {
            const token = Helper.generateToken(result.rows[0].id)
            res.status(201).json({
              messsage: 'User created',
              token,
              data
            });
            pool.end();
          })
        pool.end()
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  }
  
}