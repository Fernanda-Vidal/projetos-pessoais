const $ = document;
const screen = $.getElementById('screen');
const buttons = $.querySelectorAll('.button');
const buttonsNumbers = $.querySelectorAll('.btn-number');
const btnAddition = $.getElementById('btn-addition');
const btnSub = $.getElementById('btn-subtraction');
const btnDiv = $.getElementById('btn-div');
const btnMulti = $.getElementById('btn-multiplication');
const btnEqual = $.getElementById('btn-equal');
const btnClear = $.getElementById('btn-clear');
let firstNumber = 0;
let op = '';
let secondNumber = 0;
let result;

screen.innerText = firstNumber;

console.log(buttonsNumbers)

const setScreen = (ev) => {
    const param = ev.target.innerText;
    const number = Number(param)
    if (!result) {
        if (op === '') {
            if (firstNumber === 0) {
                firstNumber = number;
                // console.log(typeof number)
            } else {
                firstNumber = `${firstNumber} ${number}`
            }
            screen.innerText = firstNumber
        } else {
            if (secondNumber === 0) {
                secondNumber = number;
            } else {
                secondNumber = `${secondNumber} ${number}`
            }
            screen.innerText = `${firstNumber} ${op} ${secondNumber}`;
        } 
    } else {
        alert('Please, press C');
    }
}

const operation = ({ target }) => {
    if (!result) {
        op = target.innerText;
        screen.innerText = firstNumber + op;
    } else {
        alert('Please, press C');
    }
}

const equal = () => {
    if (op === '+') {
        result = firstNumber + secondNumber;
        return screen.innerText = result;
    };
    if (op === '-') {
        result = firstNumber - secondNumber;
        return screen.innerText = result;
    };
    if (op === '/') {
        result = firstNumber / secondNumber;
        return screen.innerText = result;
    };
    if (op === 'x') {
        result = firstNumber * secondNumber;
        return screen.innerText = result;
    };
}

const cleaning = () => {
    firstNumber = 0;
    op = '';
    secondNumber = 0;
    result = '';
    screen.innerText = firstNumber;
}

buttonsNumbers.forEach((button) => button.addEventListener('click', setScreen));
btnAddition.addEventListener('click', operation);
btnSub.addEventListener('click', operation);
btnMulti.addEventListener('click', operation);
btnDiv.addEventListener('click', operation);
btnEqual.addEventListener('click', equal);
btnClear.addEventListener('click', cleaning)

