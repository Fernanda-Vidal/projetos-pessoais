const $ = document;
const table = $.getElementById('table');
const playerX = $.getElementById('playerX');
const playerO = $.getElementById('playerO');
const button = $.getElementById('button');

let player = '';

const choosePlayer = (ev) => {
    const choose = ev.target.innerText;
    player = choose;
    $.getElementById(`player${choose}`).style.color = 'green';
    console.log(`player${choose}`)
}

playerX.addEventListener('click', choosePlayer);
playerO.addEventListener('click', choosePlayer);

const playGame = (ev) => {
    if (player === 'X') {
        const jogada = $.getElementById(ev.target.id);
        jogada.innerText = 'X';
        player = 'O';     
    } else {
        const jogada = $.getElementById(ev.target.id);
        jogada.innerText = "O";
        player = 'X';
    }
    verifyWinner()
}
    for (let i = 0; i < 9; i += 1) {
        const squad = $.createElement('div');
        squad.id = `div${i}`;
        squad.className = 'squadTable';
        table.appendChild(squad);
        squad.addEventListener('click', playGame);
    }


// const resetGame = () => {
//     table.innerText = '';
//     console.log(table);
// }

// button.addEventListener('click', resetGame);

$.getElementById('button').addEventListener('click', () => {
    table.innerText = '';
    for (let i = 0; i < 9; i += 1) {
        const squad = $.createElement('div');
        squad.id = `div${i}`;
        squad.className = 'squadTable';
        table.appendChild(squad);
        squad.addEventListener('click', playGame);
    }
})


const squad0 = $.getElementById('div0');
const squad1 = $.getElementById('div1');
const squad2 = $.getElementById('div2');
const squad3 = $.getElementById('div3');
const squad4 = $.getElementById('div4');
const squad5 = $.getElementById('div5');
const squad6 = $.getElementById('div6');
const squad7 = $.getElementById('div7');
const squad8 = $.getElementById('div8');

const verifyWinner = () => {
    if(squad0.innerText === 'X' && squad1.innerText === 'X' && squad2.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad0.innerText === 'O' && squad1.innerText === 'O' && squad2.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad3.innerText === 'X' && squad4.innerText === 'X' && squad5.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad3.innerText === 'O' && squad4.innerText === 'O' && squad5.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad6.innerText === 'X' && squad7.innerText === 'X' && squad8.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad6.innerText === 'O' && squad7.innerText === 'O' && squad8.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad0.innerText === 'X' && squad4.innerText === 'X' && squad8.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad0.innerText === 'O' && squad4.innerText === 'O' && squad8.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad0.innerText === 'X' && squad3.innerText === 'X' && squad6.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad0.innerText === 'O' && squad3.innerText === 'O' && squad6.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad1.innerText === 'X' && squad4.innerText === 'X' && squad7.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad1.innerText === 'O' && squad4.innerText === 'O' && squad7.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad2.innerText === 'X' && squad5.innerText === 'X' && squad8.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad2.innerText === 'O' && squad5.innerText === 'O' && squad8.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else if (squad2.innerText === 'X' && squad4.innerText === 'X' && squad6.innerText === 'X') {
        return table. innerHTML = 'X ganhou!!'
    } else if (squad2.innerText === 'O' && squad4.innerText === 'O' && squad6.innerText === 'O') {
        return table. innerHTML = 'O ganhou!!'
    } else 
        return '';
}

