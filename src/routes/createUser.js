import {Router} from 'express';
import {register} from '../controllers/userController.js';

const router = Router();

router.post('/createUser', register);

export default router;