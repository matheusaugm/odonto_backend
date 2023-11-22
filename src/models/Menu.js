import { EntitySchema } from 'typeorm';

const Menu = new EntitySchema({
    name: "menu",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "varchar",
            length: 100
        },
        level: {
            type: "int"
        },
        description: {
            type: "varchar",
            length: 100,
            nullable: true
        },
        image: {
            type: "varchar",
            nullable: true
        },
        parent_id: {
            type: "int",
            nullable: true
        },
        date_create: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        }
    },
    relations: {
        parent: {
            target: "menu",
            type: "many-to-one",
            joinColumn: {
                name: "parent_id",
                referencedColumnName: "id"
            },
            inverseSide: 'children'
        },
        children: {
            target: "menu",
            type: "one-to-many",
            inverseSide: 'parent',
            joinColumn: {
                name: "parent_id",
                referencedColumnName: "id"
            }
        }
    }
});

export default Menu;
