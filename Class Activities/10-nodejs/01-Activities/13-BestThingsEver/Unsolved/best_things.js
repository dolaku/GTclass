// fs is a core Node package for r/w
var fs = require('fs');

// Documentation: https://nodejs.org/api/fs.html
// fs.readFile(path[, options], callback)
fs.readFile('best_things_ever.txt', 'utf8', function (err, data) {

    // log any errors
    if (err) {
        return console.log(err);
    }

    // log contents of data from best_things_ever.txt
    console.log(data);

    // create array of the data
    var dataArr = data.split(',');

    // remove extra spaces before/after each index
    for (var i = 0; i < dataArr.length; i++) {
        dataArr[i] = dataArr[i].trim();
    }

    console.log(dataArr);

});