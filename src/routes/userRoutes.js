import {Router} from 'express';
import {
    deleteUser,
    register,
    userLogin,
    startGoogleAuth,
    handleGoogleAuthCallback,
    getUserData
} from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/createUser', register);
userRouter.post('/login', userLogin);
userRouter.get('/getUser', getUserData)
userRouter.delete('/deleteUser', deleteUser);

// Google OAuth routes
userRouter.get('/auth/google', startGoogleAuth);
userRouter.get('/auth/google/callback', handleGoogleAuthCallback);

userRouter.get('/success', (req, res) => {
    res.redirect(200,"http://localhost:19006/main");
});

userRouter.get('/failed', (req, res) => {
    res.send("Authentication failed!");
});

export default userRouter;
