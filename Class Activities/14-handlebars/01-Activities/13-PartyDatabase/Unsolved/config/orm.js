var connection = require("./connection.js");
const cTable = require('console.table');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  allParties: function() {
    var queryString = "SELECT * FROM parties";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },

  allClients: function() {
    var queryString = "SELECT * FROM clients";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },

  adultParties: function() {
    var queryString = "SELECT * FROM parties WHERE party_type = ?";
    connection.query(queryString, ['grown-up'], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },

  clientParties: function() {

    // Join parties to clients
    // use client's id to find party

    var queryString =
      "SELECT clients.*, parties.* FROM clients LEFT JOIN parties ON parties.client_id = clients.id;";

    connection.query(
      queryString, function(err, result) {
        if (err) throw err;
        console.table(result);
      }
    );
  }
};

module.exports = orm;