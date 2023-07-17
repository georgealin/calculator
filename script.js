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

