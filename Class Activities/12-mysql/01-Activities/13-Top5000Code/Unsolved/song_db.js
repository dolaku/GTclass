var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});


var command = process.argv[2];
var args = process.argv.slice(3).join(' ');

// console.log(command);
// console.log(args);


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    switch (command) {
        case 'artist':
            searchArtist(args);
            break;
        case 'popular':
            searchPopularArtist();
            break;
        case 'range':
            inRange(args);
            break;
        case 'song':
            searchSong(args);
            break;
        default:
            console.log(`\r\n${div}`);
            console.log("Sorry, I don't know that one.");
    }

    // inquirer
    //     .prompt([
    //         {
    //             type: 'list',
    //             name: 'action',
    //             message: 'What would you like to search?',
    //             choices: ['Artist', 'Popularity', 'Range', 'Song Name', 'None']
    //         }
    //     ]).then( (inqRes) => {

    //     })


    connection.end();
});

function searchArtist(artist) {
    console.log(`Selecting all songs by ${artist}`.green);
    connection.query("SELECT * FROM top5000 WHERE artist = ?", [artist], function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}

function searchPopularArtist() {
    console.log(`Selecting all popular artists who appear multiple times`.green);
    connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}

function inRange(minmax) {
    var result = minmax.split('-');
    var min = result[0];
    var max = result[1];

    console.log(`Selecting from positions ${min} to ${max}`.green);
    connection.query("SELECT * FROM top5000 WHERE position >= ? AND position <= ?", [min, max], function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}

function searchSong(song) {
    console.log(`Selecting songs called ${song}`.green);
    connection.query("SELECT * FROM top5000 WHERE song = ?", [song], function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}
