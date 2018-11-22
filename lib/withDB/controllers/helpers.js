import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
  /**
   * Hash password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  /**
   * compare password
   * @param {string} hashedPassword
   * @param {string} password
   * @returns {Boolean} returns true or false
   */
  comparePassword(hashedPassword, password) {
    return bcrypt.compareSync(password, hashedPassword);
  },

  /**
   * check if email is valid
   * @param {string} email
   * @returns {Boolean} true or false
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */
  generateToken(id) {
    const token = jwt.sign({
      userId: id,
    },
    process.env.SECRET, { expiresIn: '5d' });
    return token;
  },
};

export default Helper;
