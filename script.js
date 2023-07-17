function add (a,b) {
    let result = a + b;
    return result;
};

function substract (a,b) {
    let result = a - b;
    return result;
};

function multiply (a,b) {
    let result = a * b;
    return result;
};

function divide (a,b) {
    let result = a / b;
    return result;
};

let firstNumber, secondNumber, operator;

function operate (operator, firstNumber, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return substract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

let num = [];

const keyOne = document.getElementById('key-one');
keyOne.addEventListener('click', function pressOne () {
    num.push(1);
    console.log(num);
});

const keyTwo = document.getElementById('key-two');
keyTwo.addEventListener('click', function pressTwo () {
    num.push(2);
    console.log(num)
})

const keyThree = document.getElementById('key-three');
keyThree.addEventListener('click', function pressThree () {
    num.push(3)
    console.log(num)
});

const keyFour = document.getElementById('key-four');
keyFour.addEventListener('click', function pressFour () {
    num.push(4);
    console.log(num)
});

const keyFive = document.getElementById('key-five');
keyFive.addEventListener('click', function pressFive () {
    num.push(5);
    console.log(num)
});

const keySix = document.getElementById('key-six');
keySix.addEventListener('click', function pressSix () {
    num.push(6);
    console.log(num)
});

const keySeven = document.getElementById('key-seven');
keySeven.addEventListener('click', function pressSeven () {
    num.push(7);
    console.log(num)
});

const keyEight = document.getElementById('key-eight');
keyEight.addEventListener('click', function pressEight () {
    num.push(8);
    console.log(num)
});

const keyNine = document.getElementById('key-nine');
keyNine.addEventListener('click', function pressNine () {
    num.push(9);
    console.log(num)
});

const keyZero = document.getElementById('key-zero');
keyZero.addEventListener('click', function pressZero () {
    num.push(0);
    console.log(num)
});

const keyPoint = document.getElementById('key-point');
keyPoint.addEventListener('click', function pressPoint () {
    num.push('.');
    console.log(num)
});

console.log(num);
