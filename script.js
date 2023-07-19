function add (a,b) {
    let result = (parseFloat(a) * 10 + parseFloat(b) * 10) / 10;
    return result;
};

function substract (a,b) {
    let result = b - a;
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
    createFirstNumber();
    displayNumber();
});

const keyTwo = document.getElementById('key-two');
keyTwo.addEventListener('click', function pressTwo () {
    num.push(2);
    displayNumber();
    createFirstNumber();
    displayNumber();
})

const keyThree = document.getElementById('key-three');
keyThree.addEventListener('click', function pressThree () {
    num.push(3)
    createFirstNumber();
    displayNumber();
});

const keyFour = document.getElementById('key-four');
keyFour.addEventListener('click', function pressFour () {
    num.push(4);
    createFirstNumber();
    displayNumber();
});

const keyFive = document.getElementById('key-five');
keyFive.addEventListener('click', function pressFive () {
    num.push(5);
    createFirstNumber();
    displayNumber();
});

const keySix = document.getElementById('key-six');
keySix.addEventListener('click', function pressSix () {
    num.push(6);
    createFirstNumber();
    displayNumber();
});

const keySeven = document.getElementById('key-seven');
keySeven.addEventListener('click', function pressSeven () {
    num.push(7);
    createFirstNumber();
    displayNumber();
});

const keyEight = document.getElementById('key-eight');
keyEight.addEventListener('click', function pressEight () {
    num.push(8);
    createFirstNumber();
    displayNumber();
});

const keyNine = document.getElementById('key-nine');
keyNine.addEventListener('click', function pressNine () {
    num.push(9);
    createFirstNumber();
    displayNumber();
});

const keyZero = document.getElementById('key-zero');
keyZero.addEventListener('click', function pressZero () {
    num.push(0);
    createFirstNumber();
    displayNumber();
});

const keyPoint = document.getElementById('key-point');
keyPoint.addEventListener('click', function pressPoint () {
    num.push('.');
    createFirstNumber();
    displayNumber();
});

function createFirstNumber () {
    let n = num.join('');
firstNumber = parseFloat(n);


}

let display = document.getElementById('display');
function displayNumber () {
    if (firstNumber) {
        display.textContent = firstNumber;
    } else {
        display.textContent = '';
    }
};

const clearButton = document.getElementById('key-clear');
clearButton.addEventListener('click', clearDisplay);

function clearDisplay () {
    display.textContent = '';
    memoryDisplay.textContent = '';
    num = [];
    secondNumber = '';
    createFirstNumber();
    operator = '';
    countEqual = 0;
};

const deleteButton = document.getElementById('key-delete');
deleteButton.addEventListener('click',function () {
num.pop();
createFirstNumber();
displayNumber();
});


const memoryDisplay = document.getElementById('memory');

const addButton =  document.getElementById('key-add');
let countAdd = 0;
addButton.addEventListener('click',function () {
    if (countAdd === 0 && firstNumber && countEqual == 0) {
        secondNumber = firstNumber;
        operator = '+';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (firstNumber && countEqual > 0 && countAdd == 0) {
        operator = '+';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (countAdd >=1 && firstNumber) {
        doEqual();
        operator = '+';
        num =[];
        createFirstNumber();
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        countAdd++;
    } else if (firstNumber !== firstNumber) {
        operator = '+';
        memoryDisplay.textContent = secondNumber + operator;
    }
});

const substractButton = document.getElementById('key-substract');
substractButton.addEventListener('click', function (){
    if (countAdd === 0 && firstNumber && countEqual == 0) {
        secondNumber = firstNumber;
        operator = '-';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (firstNumber && countEqual > 0 && countAdd == 0) {
        operator = '-';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (countAdd >=1 && firstNumber) {
        doEqual();
        operator = '-';
        num =[];
        createFirstNumber();
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        countAdd++;
    } else if (firstNumber !== firstNumber) {
        operator = '-';
        memoryDisplay.textContent = secondNumber + operator;
    }
})

const multiplyButton = document.getElementById('key-multiply');
multiplyButton.addEventListener('click', function () {
    if (countAdd === 0 && firstNumber && countEqual == 0) {
        secondNumber = firstNumber;
        operator = '*';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (firstNumber && countEqual > 0 && countAdd == 0) {
        operator = '*';
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        num =[];
        createFirstNumber();
        countAdd++;
    } else if (countAdd >=1 && firstNumber) {
        doEqual();
        operator = '*';
        num =[];
        createFirstNumber();
        memoryDisplay.textContent = secondNumber + operator;
        display.textContent = '';
        countAdd++;
    } else if (firstNumber !== firstNumber) {
        operator = '*';
        memoryDisplay.textContent = secondNumber + operator;
    }
})

let result;
const equalButton = document.getElementById('key-equal');
equalButton.addEventListener('click', doTotalEqual);
let countEqual = 0;
function doTotalEqual () {
    countAdd = 0;
    countEqual = 1;
    doEqual();
}
    function doEqual (result) {
    countEqual++;
    if (firstNumber && secondNumber) {
        countEqual++;
        result = operate(operator, firstNumber,secondNumber);
        display.textContent = result;
        memoryDisplay.textContent = secondNumber + operator + firstNumber;
        secondNumber = result;
    }else if (firstNumber === NaN && secondNumber) {
        firstNumber = secondNumber;
        result = operate(operator, firstNumber,secondNumber);
              display.textContent = result;
              memoryDisplay.textContent = secondNumber + operator + firstNumber;
              secondNumber = result;
              num =[];
              createFirstNumber(); 
              countEqual = 0;
    } else if (firstNumber===null && secondNumber===null) {

    }}

/*function disableButtons () {
    if (firstNumber == '' && secondNumber == '') {
        addButton.disabled = true;
        equalButton.disabled = true;
    }
}
disableButtons();*/