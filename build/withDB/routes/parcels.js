'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelQuery = require('../controllers/parcelQuery');

var _parcelQuery2 = _interopRequireDefault(_parcelQuery);

var _auth = require('../middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', _auth2.default.verifyToken, _parcelQuery2.default.getAllParcels);
router.get('/:id', _auth2.default.verifyToken, _parcelQuery2.default.getSingleParcel);
router.post('/', _auth2.default.verifyToken, _parcelQuery2.default.createParcel);
router.put('/:id/cancel', _auth2.default.verifyToken, _parcelQuery2.default.cancelParcel);
router.put('/:id/destination', _auth2.default.verifyToken, _parcelQuery2.default.changeDestination);

exports.default = router;