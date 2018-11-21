import express from 'express';
import db from '../controllers/userQuery';

const router = express.Router();

router.post('/signup', db.createUser);
router.post('/login', db.login);

export default router;
