'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _queries = require('../controllers/queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _queries2.default);