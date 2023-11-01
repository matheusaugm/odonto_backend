import {Router} from 'express';
import {deleteUser, register, userLogin} from '../controllers/userController.js';

const router = Router();

router.post('/createUser', register);
router.post('/login', userLogin);
router.delete('/deleteUser', deleteUser);

export default router;