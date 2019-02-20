'use strict';

const BURGERS = {
    'small' : {
        'price': 50,
        'calories': 20,
    },
    'big' : {
        'price': 100,
        'calories': 40,
    },
};

const TOPPINGS = {
    'cheesy' : {
        'price': 20,
        'calories': 20,
    },
    'salad': {
        'price': 20,
        'calories': 5
    },
    'potato': {
        'price': 15,
        'calories': 10
    },
    'spice': {
        'price': 15,
        'calories': 0,
    },
    'mayoneese': {
        'price': 20,
        'calories': 5
    }
};

class Burger {
    constructor(type) {
        this.type = BURGERS[type];
        this.price = BURGERS[type]['price'];
        this.calories = BURGERS[type]['calories'];
    }
}

class Topping {
    constructor(toppings) {
        this.price = 0;
        this.ingredients = [];
        toppings.forEach(function(topping){
            this.toppings.push(TOPPINGS[topping]);
            this.price+=(TOPPINGS[topping]['price']);
        })
    }
    countCalories() {
        this.toppings.forEach(function(topping){
            this.calories += topping.calories;
        })
    }
}

class BurgerWithToping {
    constructor(type, toppings=null) {
        this.buger = new Burger(type);
        if (toppings !== null) {
            this.toppings = new Topping(toppings);
        }
        this.price = 0;
        this.calories = 0;
    }
    countPrice() {
        this.price = this.burger.price + this.toppings.price;
    }
    countCalories() {
        this.calories = this.burger.calories + this.toppings.calories.countCalories();
    }
}

burger = new BurgerWithToping('small', ['cheesy', 'spice']);
console.log(burger);
console.log(burger.countPrice());
console.log(burger.countCalories());