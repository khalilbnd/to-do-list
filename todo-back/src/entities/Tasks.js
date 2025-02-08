const { EntitySchema } = require('typeorm');
require('reflect-metadata');

const Task = new EntitySchema({
    name: 'Task',
    tableName: 'tasks',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        title: {
            type: 'varchar',
        },
        description: {
            type: 'varchar',
        },
        isCompleted: {
            type: 'boolean',
            default: false,
        },

        isDeleted: {
            type: 'boolean',
            default: false,
        },
        isUpdated: {
            type: 'boolean',
            default: false,
        },
        createdAt: {
            type: 'timestamp',
            createDate: true,
        },
    },
});

module.exports = { Task };