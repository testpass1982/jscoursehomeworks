"use strict";
//popov hw-3-tasks

// ***task1***
let i = 0;
do {
    i === 0 ? console.log(`${i} - это ноль`) :
        (i % 2 === 0) ? console.log(`${i} - четное число`) :
        console.log(`${i} - нечетное число`);
    i += 1;
} while (i <= 10);

// ***taks2***
for (let i = 0; i <= 9; console.log(i++)) {};

// ***task3***
for (let i = 0; i < 20; i++) {
    let b = 0;
    let s = '*';
    while (b < i) {
        s+='*';
        b++;
    }
    console.log(s);
};

// ***task4***
let c = 0;
function isPrime(number) {
    for (let i =2; i < number; i++) {
        if (number % i === 0) {return false};
    }
    return number !==1 && number !== 0;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

while (c < 100) {
    if (isPrime(c)) console.log(`isPrime ${c}`);
    c++;
}

// ***task5***
const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];
let maxSumValue = 0;
let arrayIndex = 0;
arr.forEach(function(item) {
    let tmp = 0;
    item.forEach(function(element){
        tmp+=element;
        if (tmp > maxSumValue) {
            maxSumValue = tmp;
            arrayIndex = arr.indexOf(item);
        }
    })
})
let minArrayValue = arr[arrayIndex][0]
arr[arrayIndex].forEach(function(item){
    if (item < minArrayValue) {
        minArrayValue = item;
    }
})

console.log(`max sum: ${maxSumValue}`);
console.log(`arr index: ${arrayIndex}`);
console.log(`min value: ${minArrayValue}`);


