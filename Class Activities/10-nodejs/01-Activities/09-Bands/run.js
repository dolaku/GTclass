// grabs exports from bands.js
var bandsImport = require('./bands.js');


for (var key in bandsImport) {
    console.log(`A ${key} band is ${bandsImport[key]}.`);
}