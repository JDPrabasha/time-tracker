const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("time_tracker", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
