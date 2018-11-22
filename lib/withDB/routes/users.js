import express from 'express';
import dc from '../controllers/userQuery';

const router = express.Router();

router.post('/signup', dc.createUser);
router.post('/login', dc.login);

export default router;
