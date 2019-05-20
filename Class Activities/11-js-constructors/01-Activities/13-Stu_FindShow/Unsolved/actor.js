var axios = require("axios");

var Actor = function() {
  this.findActor = function(actor) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios
      .get(URL)
      .then(function (res) {
        var data = res.data[0].person;
        console.log(`\r\n===== Actor Info =====`);
        console.log(`Name: ${data.name}`);
        console.log(`DOB: ${data.birthday}`);
        console.log(`Gender: ${data.gender}`);
        console.log(`Country: ${data.country.name}`);

      });
  };
};

module.exports = Actor;