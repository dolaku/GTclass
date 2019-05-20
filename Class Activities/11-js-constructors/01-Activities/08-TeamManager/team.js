// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function () {
        var coinFlip = math.floor(math.random() * 2);
        console.log(coinFlip);

        if (coinFlip === 0) {
            this.offense++;
        } else {
            this.defense++;
        }
    }

    this.badGame = function () {
        var coinFlip = math.floor(math.random() * 2);
        console.log(coinFlip);

        if (coinFlip === 0) {
            this.offense--;
        } else {
            this.defense--;
        }
    }

    this.printStats = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Position: ${this.position}`);
        console.log(`Offense: ${this.offense}`);
        console.log(`Defense: ${this.defense}`);
    }
}

var count = 0;
var playerArray = [];
var subArray = [];

function addPlayer() {
    if (count < 5) {
        console.log(`===== NEW PLAYER =====`);
        inquirer.prompt([
            {
                name: "name",
                message: "What is your player's name?"
            }, {
                name: "position",
                message: "What is your player's position?"
            }, {
                name: "offense",
                message: "What is your player's offense?",
                type: 'list',
                choices: [1,2,3,4,5,6,7,8,9,10]
            }, {
                name: "defense",
                message: "What is your player's defense?",
                type: 'list',
                choices: [1,2,3,4,5,6,7,8,9,10]
            }
        ]).then(function(answers) {
            var newPlayer = new Player (
                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            );

            playerArray.push(newPlayer);
            count++;

            addPlayer();
        });

    } else {
        for (var i = 0; i < playerArray.length; i++) {
            playerArray[i].printStats();
        }
    }


};

addPlayer();


function playGame() {
    var gameCount = 0;
    var score = 0;
    if (gameCount < 5) {
        var offenseCheck = (Math.floor(Math.random() * 20) + 1);
        var defenseCheck = (Math.floor(Math.random() * 20) + 1);
        var teamOffense = 0;
        var teamDefense = 0;

        for (var i = 0; i < playerArray.length; i++) {
            teamOffense += playerArray[i].offense;
            teamDefense += playerArray[i].defense;
        }

        if (offenseCheck < teamOffense) {
            score++;
        } else if (defenseCheck < teamDefense) {
            score--;
        }

        gameCount++;
    }
}