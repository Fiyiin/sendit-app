import express from 'express';
import db from '../controllers/userQuery';
import dc from '../controllers/parcelQuery';
import Auth from '../middleware/auth';

const router = express.Router();

router.post('/signup', db.createUser);
router.post('/login', db.login);
router.get('/:id/parcels', Auth.verifyToken, dc.getParcels)

export default router;
