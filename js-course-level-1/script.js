console.log('hello world');

$(document).ready(function () {
    //Task1
    function task1() {
        let a = 1, b = 1, c, d; //здесь объявляются переменные, c,d объявляются в неправильном виде без let, const, var, js это допускает
        c = ++a; //переменной c присваевается значение в виде префиксной формы (возвращает a, увеличенную на 1),
        //т.е. переменная c становится равной 2 и в то же время переменная a увеличивается на 1 (становистя равной 2)
        console.log(`c=${c}`); // c равно 2
        d = b++; //здесь переменной d присваивается значение переменной b, объявленной в строке 6 (т.е. 1), а потом переменная b увеличивается на 1
        console.log(`d=${d}`); // d равно 1
        c = 2 + ++a; // c становится равной 5 потому что a (на этот момент она равна 2) увеличивается на 1 префиксным оператором инкремента,
        //потом осуществляется сложение 2+3=5 в соответствии с приоритетом операторов
        console.log(`c=${c}`); // c равно 5
        d = 2 + b++; // сначала складывается 2+2(значение переменной b на текущий момент), затем переменная b увеличивается на 1
        // постфиксный оператор имеет более низкий приоритет, чем унарный плюс
        console.log(`d=${d}`); // d равно 4
        console.log(`a=${a}`); // a равно 3 (потому что она увеличивалась на 1 дважды - в строке 7 и в строке 12)
        console.log(`b=${b}`); // b равно 3 (потому что она увеличивалась на 1 в строке 10 и в строке 15)
    };

    //Task2
    function task2() {
        let a = 2;
        let x = 1 + (a *= 2); // x будет равно 5, потому что этой переменной присваивается значение 1+4 (a*=2 равносильно a= a*2)
        console.log(`x=${x}`);
    };

    //Task3
    function task3() {
        const a = 13;
        const b = -14;
        if (a > 0 && b > 0) {
            console.log(`a и b положительные, выводим разность: ${Math.abs(a - b)}`);
        } else if ( a < 0 && b < 0 ) {
            console.log(`a и b отрицательные, выводим произведение: ${a*b}`);
        } else if ((a < 0 || b > 0) || (a > 0 || b < 0 )) {
            console.log(`a и b имеют разные знаки, выводим сумму: ${a+b}`);
        }
    };

    //Task4
    function mySum (a, b) {
        return a + b;
    };
    function mySub (a, b) {
        return a - b;
    };
    function myDiv (a, b) {
        return Math.round(a / b);
    };
    function myMultiply(a , b) {
        return a * b;
    };
    //Task5

    function mathFactory (mathOperation, a, b) {
        switch (mathOperation) {
            case 'sum' : return `Sum: ${mySum(a, b)}`;
            case 'sub' : return `Sub: ${mySub(a, b)}`;
            case 'div' : return `Div: ${myDiv(a, b)}`;
            case 'mult' : return `Multiply: ${myMultiply(a, b)}`;
        }
    }

    //Task6
    function textify(value) {
        const v = parseInt(value);
        if (v % 10 === 0 || v === 0) {
            return `${value} рублей`;
        } else if (v >= 5 && v <= 20) {
            return `${value} рублей`;
        } else if (v!==11 && v % 10 === 1 || v === 1) {
            return `${value} рубль`;
        } else if (v % 10 === 2 || v % 10 === 3 || v % 10 === 4) {
        return `${value} рубля`;
        } else {
            return `${value} рублей`;
        }
    };

    $('#myBank').click(function() {
        const money = $('#moneyInput').val();
        $('#myOutput').html(`Ваш вклад: ${textify(money)}`);
    });
    console.log('******task1*****');
    task1();
    console.log('******task2*****');
    task2();
    console.log('******task3*****');
    task3();
    console.log('*****task4 and task5*****');
    console.log(mathFactory('sum', -3, -9));
    console.log(mathFactory('sub', -3, 9));
    console.log(mathFactory('div', -21, 7));
    console.log(mathFactory('mult', -5, 7));
    console.log('*****task6*****');
    console.log('*****see index-html*****');
});