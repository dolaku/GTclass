// Create a basic command line Node application using the inquirer package.
var inquirer = require('inquirer');

// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
inquirer
    .prompt([
        {
            //    - Basic input,
            type: 'input',
            message: 'What is your name?',
            name: 'username'
        },
        {
            //    - Password,
            type: 'password',
            message: 'Set your password',
            name: 'password'
        },
        {
            //    - List,
            type: 'list',
            message: 'You know what to do:',
            choices: ['Rock', 'Paper', 'Scissors'],
            name: 'playHand'
        },
        {
            //    - Checkbox,
            type: 'checkbox',
            message: 'Favorite color?',
            name: 'color',
            choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet']
        },
        {
            //    - and Confirm
            type: 'confirm',
            message: 'Is this okay?',
            name: 'confirm',
            default: true
        },
    ])

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
    .then(function(res) {
        if (res.confirm) {
            console.log('\nWelcome ' + res.username);
            console.log('\nYou chose: ' + res.playHand);
            console.log('\nYour colors: ' + res.color);
        } else {
            console.log('Okay, bye.');
        }
    });





// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
