import express from 'express';
import db from '../controllers/parcelQuery';
import Auth from '../middleware/auth';

const router = express.Router();

router.get('/', Auth.verifyToken, db.getAllParcels);
router.get('/:id', Auth.verifyToken, db.getSingleParcel);
router.post('/', Auth.verifyToken, db.CreateParcel);
router.put('/:id/cancel', Auth.verifyToken, db.cancelParcel);

export default router;
