// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
// constructor...
// ... used to create a new sequelize object
// ... to instanciate sequalize ORM
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
                                                  //UN    PW
var sequelize = new Sequelize("sequelize_chirpy", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
