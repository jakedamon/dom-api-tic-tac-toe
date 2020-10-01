window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board')
    let clicks = 1;
    board.addEventListener('click', event => {
        
        if (event.target.id.includes('square')) {
            if (clicks % 2 !== 0) {
                event.target.innerHTML = ("<img src=/player-x.svg>");
                clicks++;
           } else {
                event.target.innerHTML = ("<img src=/player-o.svg>");
                clicks++;
            }
        }
        
    })


});
