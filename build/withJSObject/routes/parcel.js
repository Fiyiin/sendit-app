'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcel = require('../controllers/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

var _parcel3 = require('../middleware/parcel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/', _parcel3.validateRequest, _parcel2.default.createNewOrder);
router.get('/', _parcel2.default.getAllParcels);
router.get('/:id', _parcel2.default.getParcelById);
router.put('/:id', _parcel2.default.cancelOrder);

exports.default = router;