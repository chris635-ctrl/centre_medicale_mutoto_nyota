const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("centre_medical_mutoto_nyota", "root", "motdepasse", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
