let squareValues = ['','','','','','','','',''];
let currentPlayerSymbol = 'x'
window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board')

    
    board.addEventListener('click', event => {
        
        const targetId = event.target.id;

        if (!targetId.startsWith('square-')) return;

        const squareIndex = Number.parseInt(targetId[targetId.length-1]);

        if (squareValues[squareIndex] !== '') return;

        const image = document.createElement('img');
        image.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`
        event.target.appendChild(image);

        squareValues[squareIndex] = currentPlayerSymbol;

        if (currentPlayerSymbol === 'x') {
            currentPlayerSymbol = 'o';
        } else {
            currentPlayerSymbol = 'x';
        }
    })

    let checkGameStatus = () => {
        const x = '<img src="/player-x.svg">'
        const o = '<img src="/player-o.svg">'
        
        for(let i = 0; i < 9; i++){
            if (event.target.innerHTML == x){
            playingBoard[i] = x;
            } else if (event.target.innerHTML == o) {
                playingBoard[i] = o;
            }
        }
        console.log(playingBoard)
    }

});
