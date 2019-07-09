// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
let chirp = require('../public/js/chirp');

// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get('/api/all', (req, res) => {
    connection.query('SELECT * FROM chirps', (err, result) => {
      if (err) throw err;
      res.json(result);
    })
    
  });

  // Add a chirp
  app.post('/api/new', (req, res) => {
    console.log('Chipr Data:');
    console.log(req.body);

    connection.query('INSERT INTO chirps (author, chirp, time_created VALUES (?,?,?)',
      [req.body.author, req.body.chirp, req.body.time_created],
      (err, result) => {
        if (err) throw err;
        console.log('Chirp saved!');
        res.end();
      });
  });
};
