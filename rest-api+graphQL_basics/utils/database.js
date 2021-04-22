const Sequelize = require('sequelize');

const DB_NAME = 'node-todo';
const USER_NAME = 'dima';
const PASSWORD = 'hi5mar1na';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
