// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "HVaHmCoNBGkgfrCNbeWHPICt9GOI5Wx5"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);



// Take in the command line arguments
var args = process.argv;


// Build your address as an array or string
var location = args[2];



// Then use the geocoder object to search the address
var URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${options.apiKey}&location=${location}`;

geocoder.geocode(location, function (err, data) {

  if (err) {
    console.log(err);
  }

  console.log(JSON.stringify(data, null, 2));
})
