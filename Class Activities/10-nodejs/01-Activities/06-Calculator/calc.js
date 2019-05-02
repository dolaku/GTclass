var args = process.argv;

var operator = args[2];
var a = parseInt(args[3]);
var b = parseInt(args[4]);

var x = {
    add: function () {
        console.log(a + b);
    },
    subtract: function () {
        console.log(a - b);
    },
    multiply: function () {
        console.log(a * b);
    },
    divide: function () {
        console.log(a / b);
    },
    remainder: function () {
        console.log(a % b);
    }
}

if (operator === 'add') {
    x.add();
} else if (operator === 'subtract') {
    x.subtract();
} else if (operator === 'multiply') {
    x.multiply();
} else if (operator === 'divide') {
    x.divide();
} else if (operator === 'remainder') {
    x.remainder();
} else {
    console.log('something is not right');
}

