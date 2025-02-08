// ormconfig.js
module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'todo_db',
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.js'],
    migrations: ['src/migrations/**/*.js'],
    subscribers: ['src/subscribers/**/*.js'],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers',
    },
};