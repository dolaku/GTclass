// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    if (path) {

        if (path === '/') path += 'index.html';
    
    
        fs.readFile(__dirname + path, function (err, data) {
    
            if (err) console.log(err);
    
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // 200 is a status code for 'OK'
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else {
        
    }
}



// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});


