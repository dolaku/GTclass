// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// This is the code we copied and pasted from our app page
var config = {
  apiKey: "AIzaSyCnsYIEsFiuyNkxDfCXzwVVzfic7v0Y42Q",
  authDomain: "first-gt-project.firebaseapp.com",
  databaseURL: "https://first-gt-project.firebaseio.com",
  projectId: "first-gt-project",
  storageBucket: "first-gt-project.appspot.com",
  messagingSenderId: "981075078952"
};
firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highBidder = initialBidder;
var highPrice = initialBid;

var bidderName;
var bidderPrice;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.

$('#highest-bidder').html(highBidder);
$('#highest-price').html(highPrice);

// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
  var data = snapshot.val();
  console.log(snapshot.val());

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {


    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highBidder = data.highBidder;
    highPrice = parseInt(data.highPrice);
    

    // Change the HTML to reflect the stored values

    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);

    // Print the data to the console.
    console.log(highBidder);
    console.log(highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  $('#highest-bidder').html(highBidder);
  $('#highest-price').html(highPrice);

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });
    
    // Log the new High Price
    console.log(highPrice);

    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder
    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
