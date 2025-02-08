// src/data-source.js
const { DataSource } = require('typeorm');
const { Task } = require('./entities/Tasks');
require('reflect-metadata');

module.exports.AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'todo_db',
    synchronize: true, 
    logging: false,
    entities: [Task],
    migrations: [], 
    subscribers: [], 
});