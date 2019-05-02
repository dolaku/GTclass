// fs package for r/w
var fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

fs.readFile('bank.txt', 'utf8', function (err, data) {

    // log errors if they exist
    if (err) {
        console.log(err);
    }

    var dataArr = data.split(',');
    var results = 0;

    for (var i = 0; i < dataArr.length; i++) {
        dataArr[i] = dataArr[i].trim();
    }

    //object of tasks
    var task = {
        total: function () {
            for (var i = 0; i < dataArr.length; i++) {
                results += parseFloat(dataArr[i]);
            }
            console.log('Your total is ' + results.toFixed(2));
        },
        deposit: function () {
            fs.appendFile('bank.txt', `, ${value}`, function (err) {
                // log errors if they exist
                if (err) {
                    console.log(err);
                } else if (value) {
                    console.log('Deposit: ' + value);
                }
            });
        },
        withdrawal: function () {
            fs.appendFile('bank.txt', `, -${value}`, function (err) {
                // log errors if they exist
                if (err) {
                    console.log(err);
                } else if (value) {
                    console.log('Withdrew: ' + value);
                }
            });
        }
    }

    console.log(dataArr);

    if (action === 'total') {
        task.total();
    } else if (action === 'deposit') {
        task.deposit();
    } else if (action === 'withdrawal') {
        task.withdrawal();
    }
});



