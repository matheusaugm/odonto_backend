import { EntitySchema } from 'typeorm';

const User = new EntitySchema({
    name: "usuario",
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
        password: {
            type: "varchar",
            length: 100
        },
        ra: {
            type: "varchar",
            length: 100
        },
        email: {
            type: "varchar",
            length: 100
        },
        image: {
            type: "blob",
            nullable: true

        },
        date_create: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
        last_date_access: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        }
    }
});

export default User;