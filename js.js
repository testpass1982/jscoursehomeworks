class Cat {
    constructor (name) {
        this.nameIt(name);
        this.age = 0;
    }
    nameIt(name) {
        this.name = `i am ${name}`;
        return this.name;
    }
    changeName(name) {
        this.name = name;
    }
}

kitty = new Cat('hop');
console.log(kitty.name);
kitty.nameIt('woof');
console.log(kitty.name);
kitty.changeName('gav');
console.log(kitty.name);