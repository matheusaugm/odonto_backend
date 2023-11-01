import {createUser} from "../services/userServices.js";


export async function register(req, res) {
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
