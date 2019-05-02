var args = process.argv;
var param1 = parseInt(args[2]);
var param2 = parseInt(args[3]);

if (param1 === param2) {
    console.log('These are equal!');
} else {
    console.log('NOPE!');
}