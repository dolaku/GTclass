var axios = require("axios");
var fs = require('fs');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios
      .get(URL)
      .then(function (res) {
        var data = res.data;

        // request info on tv shows
          // show name
          // genre
          // rating
          // network
        console.log(`\r\n===== Show Info =====`);
        console.log(`Show: ${data.name}`);
        console.log(`Genre: ${data.genres[0]}`);
        console.log(`Rating: ${data.rating.average}`);
        console.log(`Network: ${data.network.name}`);
        console.log(`Summary: ${data.summary}`);

        // append
        fs.appendFile('log.txt', showData + '\n==========\n\n', function(err) {
          if (err) {
            console.log(err);
          }
          console.log(showData);
        });
      });
  };
};

module.exports = TV;
