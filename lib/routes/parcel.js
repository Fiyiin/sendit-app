import express from 'express';
import { check } from 'express-validator/check';

import ctrlParcel from '../controllers/parcel';

const router = express.Router();

const validateRequest = [
  check('name')
    .not().isEmpty({ ignore_whitespace: true })
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 chars long'),
  check('pickup')
    .not().isEmpty({ ignore_whitespace: true })
    .withMessage('Pickup location is required'),
  check('delivery')
    .isString()
    .withMessage('Delivery location is required'),
  check('weight')
    .not().isEmpty({ ignore_whitespace: true })
    .withMessage('Name is required')
    .isAlphanumeric()
    .withMessage('Weight should be provided with unit eg 4g '),
];

router.post('/', validateRequest, ctrlParcel.createNewOrder);
router.get('/', ctrlParcel.getAllParcels);
router.get('/:id', ctrlParcel.getParcelById);
router.put('/:id', ctrlParcel.cancelOrder);

export default router;
