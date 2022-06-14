const $ = document;

const number = $.getElementById('number');
const btnIncrease = $.getElementById('increase');
const btnDecrease = $.getElementById('decrease');
const btnReset = $.getElementById('reset');

let num = 0;
const increseNumber = () => {
    num += 1;
    number.innerText = num;
}

btnIncrease.addEventListener('click', increseNumber);

const decreaseNumber = () => {
    if (num === 0) {
        number.innerText = num;
    } else {
        num -= 1;
        number.innerText = num;
    }

}

btnDecrease.addEventListener('click', decreaseNumber);

const resetNumber = () => {
    num = 0;
    number.innerText = num;
}

btnReset.addEventListener('click', resetNumber);
