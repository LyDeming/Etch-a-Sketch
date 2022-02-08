const grid = document.querySelector('.grid');
const userInput = document.getElementById('blockAmount').value;
const erase = document.querySelector('.erase');
const block = document.querySelector('div');

function creatEasel() {
    for (i = 0; i < userInput; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        grid.appendChild(block);
    }
}

creatEasel()

block.addEventListener('mouseover', function(event) {
    event.target.classList.replace('block', 'draw');
});

erase.addEventListener('click', function(event) {
    event.target.classList.replace('draw', 'block');
});