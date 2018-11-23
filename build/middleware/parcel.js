'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRequest = undefined;

var _check = require('express-validator/check');

const validateRequest = exports.validateRequest = [(0, _check.check)('name').not().isEmpty({ ignore_whitespace: true }).withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'), (0, _check.check)('pickup').not().isEmpty({ ignore_whitespace: true }).withMessage('Pickup location is required'), (0, _check.check)('delivery').isString().withMessage('Delivery location is required'), (0, _check.check)('weight').not().isEmpty({ ignore_whitespace: true }).withMessage('Name is required').isAlphanumeric().withMessage('Weight should be provided with unit eg 4g ')];