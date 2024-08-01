require('dotenv').config();
  const config = {
  "development": {
    "username": "postgres",
    "password": "12345", 
    "database": "to_do_project",
    "host": "localhost",
    "port": "5432",
    "dialect": "postgres", 
    "logging": true
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD, 
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT,
    "logging": true
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD, 
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": false
  }
};
module.exports = config