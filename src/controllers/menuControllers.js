import {getMenu} from '../services/menuServices.js'

export const getMenuController = async (req, res) => {
    try {
        const menu = await getMenu();
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
