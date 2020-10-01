window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board')
    board.addEventListener('click', event => {

        event.target.innerHTML = ("<img src=/home/jake/app-Academy/dom-api-tic-tac-toe/player-o.svg>");
    })



});
