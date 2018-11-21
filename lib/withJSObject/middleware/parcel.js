<<<<<<< HEAD:lib/withJSObject/middleware/parcel.js
import { check } from 'express-validator/check';
||||||| merged common ancestors
import express from 'express';
import { check } from 'express-validator/check';
=======
import express from 'express';
>>>>>>> da175c4e6db659f2f3055866706ad6ef27815d95:lib/routes/parcel.js

<<<<<<< HEAD:lib/withJSObject/middleware/parcel.js
export const validateRequest = [
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
||||||| merged common ancestors
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
=======
import ctrlParcel from '../controllers/parcel';
import { validateRequest } from '../middleware/parcel';

const router = express.Router();


router.post('/', validateRequest, ctrlParcel.createNewOrder);
router.get('/', ctrlParcel.getAllParcels);
router.get('/:id', ctrlParcel.getParcelById);
router.put('/:id', ctrlParcel.cancelOrder);

export default router;
>>>>>>> da175c4e6db659f2f3055866706ad6ef27815d95:lib/routes/parcel.js
