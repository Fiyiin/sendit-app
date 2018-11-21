import express from 'express';

import ctrlParcel from '../controllers/parcel';
import { validateRequest } from '../middleware/parcel';

const router = express.Router();


router.post('/', validateRequest, ctrlParcel.createNewOrder);
router.get('/', ctrlParcel.getAllParcels);
router.get('/:id', ctrlParcel.getParcelById);
router.put('/:id', ctrlParcel.cancelOrder);

export default router;
