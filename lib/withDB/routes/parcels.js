import express from 'express';
import db from '../controllers/parcelQuery';
import Auth from '../middleware/auth';

const router = express.Router();

router.get('/', Auth.verifyToken, db.getAllParcelOrders);
router.get('/:id', Auth.verifyToken, db.getSingleParcel);
router.post('/', Auth.verifyToken, db.createParcel);
router.put('/:id/cancel', Auth.verifyToken, db.cancelParcel);
router.put('/:id/destination', Auth.verifyToken, db.changeDestination);

export default router;
