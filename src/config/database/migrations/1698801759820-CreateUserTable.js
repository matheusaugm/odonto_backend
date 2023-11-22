import typeorm from 'typeorm'
const { MigrationInterface, QueryRunner } = typeorm;

export class CreateUserTable1698801759820  {
    name = 'migrations1698801759820'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`password\` varchar(100) NOT NULL, \`ra\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`image\` blob, \`date_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`last_date_access\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }
}
