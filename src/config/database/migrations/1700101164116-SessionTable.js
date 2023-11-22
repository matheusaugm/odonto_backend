import typeorm from 'typeorm'
const { MigrationInterface, QueryRunner } = typeorm;
export class SessionTable1700101164116 {
    name = 'SessionTable1700101164116'
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`sessao\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usuario_sessao_id\` int NOT NULL, \`token\` varchar(255) NOT NULL, \`data_criacao\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`data_expiracao\` datetime NOT NULL, \`data_atualizacao\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sessao\` ADD CONSTRAINT \`FK_7a0d6632ca13148e5a0009ec216\` FOREIGN KEY (\`usuario_sessao_id\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`sessao\` DROP FOREIGN KEY \`FK_7a0d6632ca13148e5a0009ec216\``);
        await queryRunner.query(`DROP TABLE \`sessao\``);
    }
}
