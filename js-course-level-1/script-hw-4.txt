"use strict";

function convertRegistry(number) {
    let numRegistry = {};
    if (isNaN(number)) {
        console.log('number must be an integer')
        return numRegistry;
    } else if (number < 0 || number > 999) {
        console.log('wrong number range (must be in [...999])')
        return numRegistry;
    } else {
        numRegistry.firstDigit = number % 10;
        numRegistry.secondDigit = (number % 100 - numRegistry.firstDigit) / 10;
        number > 100 ? numRegistry.thirdDigit = (number - number % 100) / 100 :
            numRegistry.thirdDigit = 0;
        console.log(numRegistry);
        return numRegistry;
    }
};
convertRegistry(9);
convertRegistry(89);
convertRegistry(45);
convertRegistry(301);
convertRegistry(555);
convertRegistry(999);
convertRegistry('not a number');
convertRegistry(-1000);
convertRegistry(1500);

//this is hw-4 regular task

