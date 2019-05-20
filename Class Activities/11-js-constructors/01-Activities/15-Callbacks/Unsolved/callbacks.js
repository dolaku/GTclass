var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function logMsg (funcArg) {
    console.log('Message before callback.');
    funcArg();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function condition (param, funcArg) {
    if (param) {
        funcArg();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function doThings (funcArg, val) {
    funcArg(val);
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile('log.txt', msg, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Message');
});
