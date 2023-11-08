import {Router} from 'express';
import {deleteUser, register, userLogin, startGoogleAuth, handleGoogleAuthCallback} from '../controllers/userController.js';

const router = Router();

router.post('/createUser', register);
router.post('/login', userLogin);
router.delete('/deleteUser', deleteUser);

// Google OAuth routes
router.get('/auth/google', startGoogleAuth);
router.get('/auth/google/callback', handleGoogleAuthCallback);

router.get('/success', (req, res) => {
    res.send("Authentication successful!");
});

router.get('/failed', (req, res) => {
    res.send("Authentication failed!");
});

export default router;
