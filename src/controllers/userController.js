import {createUser, deleteUserService, login} from "../services/userServices.js";
import passport from "passport";


export const register = async (req, res) => {
    try {
        const { name, password, ra, email, image } = req.body;
        const data = {
            name,
            password,
            ra,
            email,
            image
        };

        const result = await createUser(data);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const userLogin = async (req, res)=> {
    try {
        const { email, password } = req.body;
        const data = {
            email,
            password
        };

        const result = await login(data);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
export const getUserData = async (req, res) => {


        return res.send(req.user);


}
export const logoutUserGoogle = async (req, res) => {
    if (req.user) {

        req.logout();
        res.send("done");
    }
}


export const deleteUser = async (req, res) => {
    try{
        const {email} = req.body;
        const result = await deleteUserService(email);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });

    }

}

export const startGoogleAuth = (req, res) => {
    passport.authenticate('google', {
        scope: ['email', 'profile']
    })(req, res);
};
export const handleGoogleAuthCallback = (req, res) => {
    passport.authenticate('google', {
        failureRedirect: 'odontonewton://login',
        successRedirect: 'odontonewton://main', session: true
    })(req, res);
};

