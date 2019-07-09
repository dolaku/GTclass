var orm = require("./config/orm.js");

// Find all parties
orm.allParties();

// Find all clients
orm.allClients();

// Find all grown-up parties
orm.adultParties();

// Find all clients and their parties
orm.clientParties();