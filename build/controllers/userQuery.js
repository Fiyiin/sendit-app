'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User {
  /**
   * Create A User
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  static async createUser(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Some values are missing' });
    }
    if (!_helpers2.default.isValidEmail(req.body.email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }
    const hashedPassword = _helpers2.default.hashPassword(req.body.password);

    const createQuery = `INSERT INTO users(first_name, last_name, email, password, isAdmin)
    VALUES($1, $2, $3, $4, $5) RETURNING *`;
    const values = [req.body.first_name, req.body.last_name, req.body.email, hashedPassword, false];

    try {
      const { rows } = await _db2.default.query(createQuery, values);
      const token = _helpers2.default.generateToken(rows[0].id);
      return res.status(201).json({ token });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).json({ message: 'User with that EMAIL already exist' });
      }
      return res.status(400).json(error);
    }
  }

  /**
   * Login
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  static async login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Some values are missing' });
    }
    if (!_helpers2.default.isValidEmail(req.body.email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await _db2.default.query(text, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).json({ message: 'The credentials you provided incorrect' });
      }
      if (!_helpers2.default.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).json({ message: 'The credentials you provided is incorrect' });
      }
      const token = _helpers2.default.generateToken(rows[0].id);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

exports.default = User;