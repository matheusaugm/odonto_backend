import typeorm from "typeorm";
const { MigrationInterface, QueryRunner } = typeorm;

export class CreateMenu1700619762427 {
    name = 'CreateMenu1700619762427'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`menu\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`level\` int NOT NULL, \`description\` varchar(100) NULL, \`image\` varchar(255) NULL, \`date_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_eb2d7e0a544bf3beb905ec0dcd\` (\`level\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_eb2d7e0a544bf3beb905ec0dcd\` ON \`menu\``);
        await queryRunner.query(`DROP TABLE \`menu\``);
    }
}
