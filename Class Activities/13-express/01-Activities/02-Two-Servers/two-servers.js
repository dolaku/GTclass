// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;


var quotes = [
    'The Way Get Started Is To Quit Talking And Begin Doing. -Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. -Winston Churchill',
    'Don’t Let Yesterday Take Up Too Much Of Today. -Will Rogers'
]

// generate random quote
function genRand() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNum];
    return randomQuote;
}


// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(genRand() + request.url);
}

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(genRand() + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });