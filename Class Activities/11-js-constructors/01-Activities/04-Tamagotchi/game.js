function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (hungry) {
            console.log('That was yummy!');
            this.hungry = false;
        } else {
            console.log('Not right now. Later?');
        }
    }

    this.sleep = function () {
        if (sleepy) {
            console.log('Zzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    }

    this.play = function () {
        if (bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log('Not right now. Later?');
        }
    }

    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + age + " old!")
    }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function () {
    console.log('Woof! Woof!');
}
dog.goOutside = function () {
    if (!this.outside) {
        console.log('Yay! I love the outdoors!');
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
}
dog.goInside = function () {
    if (this.outside) {
        console.log('Do we have to? Fine...');
        this.outside = false;
    } else {
        console.log("I'm already inside...")
    }
}


var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function () {
    console.log('Meow! Meow!');
}
cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log('MUAHAHAHAHA! TAKE THAT FURNITURE!');
        this.bored = false;
        this.sleep = true;
    }
}
cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log('Are you sure about that?');
}

