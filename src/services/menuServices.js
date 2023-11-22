import dataSource from "../config/database/index.js";
import Menu from "../models/Menu.js";

export async function getMenu() {
    const menuRepository = dataSource.getRepository(Menu);
    const menuData = await menuRepository.find();
    if(!menuData){
        throw new Error("Não foi possível carregar os itens do menu");
    }
    const itemsWithChildren = menuData.map(item => ({ ...item, children: [] }));
    const menuTree = [];

    const itemsMap = new Map(itemsWithChildren.map(item => [item.id, item]));

    itemsWithChildren.forEach(item => {
        if (item.parent_id) {
            const parent = itemsMap.get(item.parent_id);
            parent.children.push(item);
        } else {
            menuTree.push(item);
        }
    });

    return menuTree;

}