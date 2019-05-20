const mysql = require("mysql");
const inquirer = require('inquirer');
const colors = require('colors');
const div = '==========================';

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    command();


});

let command = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to search?',
                choices: ['Artist', 'Song', 'Album', 'Year', 'None/Exit']
            }
        ]).then((answer) => {
            if (answer.action !== 'None/Exit') {
                console.log(`Searching By ${answer.action}. . .`.cyan);
            }

            switch (answer.action) {

                case 'Artist':
                    searchArtist();
                    break;
                case 'Song':
                    searchSong();
                    break;
                case 'Album':
                    searchAlbum();
                    break;
                case 'Year':
                    searchYear();
                    break;
                default:
            }
        })
}

/*

SELECT top5000.artist, top5000.song, top5000.year, album
FROM top5000 JOIN top_albums
ON top5000.artist = top_albums.artist;

*/


let searchArtist = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'artist',
                message: 'Artist name?'.green
            }
        ]).then((answer) => {
            connection.query(`
            SELECT top5000.artist, top5000.song, top5000.year, album
            FROM top_albums INNER JOIN top5000
            ON top5000.artist = top_albums.artist
            WHERE top5000.artist;
            `, (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
            });

        })
}
let searchSong = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'song',
                message: 'Song name?'.green
            }
        ]).then((answer) => {
            connection.query("SELECT * FROM top5000 WHERE song = ?", [answer.song], (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
            });

        })
}

let searchAlbum = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'album',
                message: 'Album name?'.green
            }
        ]).then((answer) => {
            connection.query("SELECT * FROM top5000 WHERE album = ?", [answer.album], (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
            });

        })
}

let searchYear = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'year',
                message: 'Year?'.green
            }
        ]).then((answer) => {
            connection.query("SELECT * FROM top5000 WHERE year = ?", [answer.year], (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
            });

        })
}