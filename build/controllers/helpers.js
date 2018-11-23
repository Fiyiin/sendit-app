'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Helper = {
  /**
   * Hash password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  hashPassword(password) {
    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8));
  },

  /**
   * compare password
   * @param {string} hashedPassword
   * @param {string} password
   * @returns {Boolean} returns true or false
   */
  comparePassword(hashedPassword, password) {
    return _bcrypt2.default.compareSync(password, hashedPassword);
  },

  /**
   * check if email is valid
   * @param {string} email
   * @returns {Boolean} true or false
   */
  isValidEmail(email) {
    return (/\S+@\S+\.\S+/.test(email)
    );
  },

  /**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */
  generateToken(id) {
    const token = _jsonwebtoken2.default.sign({
      userId: id
    }, process.env.SECRET, { expiresIn: '5d' });
    return token;
  }
};

exports.default = Helper;