'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userQuery = require('../controllers/userQuery');

var _userQuery2 = _interopRequireDefault(_userQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/signup', _userQuery2.default.createUser);
router.post('/login', _userQuery2.default.login);

exports.default = router;