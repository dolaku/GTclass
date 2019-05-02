// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("movies.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  // the string from movies.txt
  console.log(data);

  // Then split it by commas (to make it more readable)
  // creates an array
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  // remove extra spaces before/after
  for (var i = 0; i < dataArr.length; i++) {
    dataArr[i] = dataArr[i].trim();
  }

  console.log(dataArr);

});
