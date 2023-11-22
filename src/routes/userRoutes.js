import {Router} from 'express';
import {
    deleteUser,
    register,
    userLogin,
    startGoogleAuth,
    handleGoogleAuthCallback,
    getUserData
} from '../controllers/userController.js';

const router = Router();

router.post('/createUser', register);
router.post('/login', userLogin);
router.get('/getUser', getUserData)
router.delete('/deleteUser', deleteUser);

// Google OAuth routes
router.get('/auth/google', startGoogleAuth);
router.get('/auth/google/callback', handleGoogleAuthCallback);

router.get('/success', (req, res) => {
    res.redirect(200,"http://localhost:19006/main");
});

router.get('/failed', (req, res) => {
    res.send("Authentication failed!");
});

export default router;
