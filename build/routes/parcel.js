'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _check = require('express-validator/check');

var _parcel = require('../controllers/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var validateRequest = [(0, _check.check)('name').not().isEmpty({ ignore_whitespace: true }).withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'), (0, _check.check)('pickup').not().isEmpty({ ignore_whitespace: true }).withMessage('Pickup location is required'), (0, _check.check)('delivery').isString().withMessage('Delivery location is required'), (0, _check.check)('weight').not().isEmpty({ ignore_whitespace: true }).withMessage('Name is required').isAlphanumeric().withMessage('Weight should be provided with unit eg 4g ')];

router.post('/', validateRequest, _parcel2.default.createNewOrder);
router.get('/', _parcel2.default.getAllParcels);
router.get('/:id', _parcel2.default.getParcelById);
router.put('/:id', _parcel2.default.cancelOrder);

exports.default = router;