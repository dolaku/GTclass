// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var inquirer = require('inquirer');

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "HVaHmCoNBGkgfrCNbeWHPICt9GOI5Wx5"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
var address = '';

inquirer.prompt([
  {
    type: 'input',
    message: 'City?',
    name: 'city'
  },
  {
    type: 'input',
    message: 'State? (abbreviated)',
    name: 'state'
  }
])
  .then(function (res) {
    if (res.city || res.state) {
      address = res.city + ' ' + res.state;
      // Then use the Google Geocoder to geocode the address
      geocoder.geocode(address, function (err, data) {
      
        if (err) {
          console.log(err);
        }
        // Then console log the result and stringify it.
        // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
        // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
        console.log(JSON.stringify(data, null, 2));
      });
    } else{
      console.log('invalid address');
    }
  });


