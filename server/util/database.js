const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("time_tracker", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
