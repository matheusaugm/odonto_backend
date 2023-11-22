import typeorm from "typeorm";
const { MigrationInterface, QueryRunner } = typeorm

export class addParentIdToMenuTable1700620317670 {
    name = 'addParentIdToMenuTable1700620317670'

    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_eb2d7e0a544bf3beb905ec0dcd\` ON \`menu\``);
        await queryRunner.query(`ALTER TABLE \`menu\` ADD \`parent_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`menu\` ADD CONSTRAINT \`FK_e5e28130fd17f88ab5ee5d3aa4c\` FOREIGN KEY (\`parent_id\`) REFERENCES \`menu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`menu\` DROP FOREIGN KEY \`FK_e5e28130fd17f88ab5ee5d3aa4c\``);
        await queryRunner.query(`ALTER TABLE \`menu\` DROP COLUMN \`parent_id\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_eb2d7e0a544bf3beb905ec0dcd\` ON \`menu\` (\`level\`)`);
    }
}
