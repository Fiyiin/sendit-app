import express from 'express';
import db from '../controllers/parcelQuery';

const router = express.Router();

router.get('/', db.getAllParcels);
router.get('/:id', db.getSingleParcel);
router.post('/', db.CreateParcel);
router.put('/:id', db.cancelParcel);
router.put('/:id/destination', db.changeDestination);

export default router;
