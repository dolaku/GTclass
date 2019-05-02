var dog = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

var cat = {
    raining: false,
    noise: 'Meow!',
    makeNoise: function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

function massHysteria(dog, cat) {
    if (dog.raining && cat.raining) {
        console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
    }
}


dog.makeNoise();

cat.raining = true;
cat.makeNoise();

massHysteria(dog, cat);