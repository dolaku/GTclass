function Char(name, profession, gender, age, strength, HP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    // logs all stats
    this.printStats = function(obj) {
        for (var property in obj) {
            console.log(property + ': ' + obj[property]);
        }
        // console.log(this.name);
        // console.log(this.profession);
        // console.log(this.gender);
        // console.log(this.age);
        // console.log(this.strength);
        // console.log(this.HP);
    }
    // is HP above 0?
    this.IsAlive = function() {
        if (this.HP > 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    // opponent takes damage equal to character's strength
    this.Attack = function(opponent) {
        var dmg = opponent.HP - this.strength;
        console.log(dmg);
    }
    // increase stats
    this.LevelUp = function() {
        this.age++;
        this.strength += 5;
        this.HP += 25;
        console.log('Leveled Up!!!!!!!!!!');
        console.log(this.age);
        console.log(this.strength);
        console.log(this.HP);
    }
}

var batman = new Char('Batman', 'Super Hero', 'Male', 48, 25, 100);
var superman = new Char('Superman', 'Super Hero', 'Male', 35, 30, 80);

batman.printStats(batman);
batman.IsAlive();
batman.Attack(superman);
batman.LevelUp();
console.log('-------------------------');
superman.printStats(superman);
superman.IsAlive();
superman.Attack(batman);
superman.LevelUp();