const { Sequelize,DataTypes,Model } = require('sequelize');
const sequelize = new Sequelize('employeedb', 'root', '', {
    host: 'localhost',
    //logging:false,
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  module.exports = db;