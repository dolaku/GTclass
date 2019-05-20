// constructor
function Programmer(name, job, age, faveLanguange) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.faveLanguange = faveLanguange;

    this.printStats = function(obj) {
        for (var property in obj) {
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

var donna = new Programmer('Donna', 'Front-End Developer', 29, 'Javascript');

donna.printStats(donna);