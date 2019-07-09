// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config");

// var ToDo = sequelize.define('todo', {
//     text: Sequelize.STRING,
//     complete: Sequelize.BOOLEAN
// },{
//     freezeTableName: true
// });

module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };