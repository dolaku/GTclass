// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var args = process.argv;
var numArray = [];

// loop through all arguments then add them to the empty array
for (var i = 2; i < args.length; i++) {
    numArray.push(args[i]);
}




// Then we print the sorted numbers by making use of a JavaScript sort function for numbers.
console.log(numArray.sort(sortNums));

// -------------------------------------------------------

// This function is needed so the JavaScript sort function knows to sort in numeric order.
// Default is to sort by alphabetic order).
// This part wasn't obvious. But a quick Google + Stack search led us to a few different posts that all said the same.
// http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// In case you are wondering, there is no "default" way to sort numerically :-(
function sortNums(a, b) {
  return (a - b);
}