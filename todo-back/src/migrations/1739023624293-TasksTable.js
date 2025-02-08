const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TasksTable1739023624293 {

    async up(queryRunner) {
        await queryRunner.query(`
              CREATE TABLE IF NOT EXISTS task (
                id INT PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                isCompleted BOOLEAN DEFAULT false,
                isDeleted BOOLEAN DEFAULT false,
                isUpdated BOOLEAN DEFAULT false,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              );
            `);

    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE task;`);
    }

}
