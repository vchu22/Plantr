const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:root@localhost:5432/plantr', {
  logging: false,
});
// const db = new Sequelize('postgres://localhost:5432/plantr');

module.exports = db;
