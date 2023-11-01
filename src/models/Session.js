import { EntitySchema } from 'typeorm';

const Session = new EntitySchema({
    name: "sessao",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        usuario_sessao_id: {
            type: "int",
            nullable: false
        },
        token: {
            type: "varchar",
            length: 255
        },
        data_criacao: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
        data_expiracao: {
            type: "datetime",
            nullable: false
        },
        data_atualizacao: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        }
    },
    relations: {
        usuario: {
            target: "usuario",
            type: "many-to-one",
            inverseSide: "sessoes",
            joinColumn: { name: "usuario_sessao_id" }
        }
    }
});

export default Session;
