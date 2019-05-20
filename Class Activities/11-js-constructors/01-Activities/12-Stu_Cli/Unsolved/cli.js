// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var fs = require('fs');
var TV = require('./tv')

// Inputs
// var args = process.argv;
var command = process.argv[2];
var args = process.argv.slice(3).join('+');
var div = '=====================';

// run functions depending on command input
switch (command) {
    case 'show':
        searchShow();
        break;
    case 'actor':
        searchActor();
        break;

    default:
        console.log(`\r\n${div}`);
        console.log("Sorry, I don't know that one.");
}



function searchShow() {
// command - node cli show <show name>
    // request info on tv shows
    // show name
    // genre
    // rating
    // network

    console.log(`\r\n${div}`);
    console.log(`Searching for TV Show. . .`);

    if (!args) {
        args = 
    }
}



function searchActor() {
// command - node cli actor <actor name>
    // request info on actors
    // full name
    // birthday
    // gender
    // country
    
    console.log(`\r\n${div}`);
    console.log(`Searching for TV Actor. . .`);
}


// keep a log of all searches
    // print to console