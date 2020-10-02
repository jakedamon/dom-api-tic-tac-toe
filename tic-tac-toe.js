let squareValues = ["", "", "", "", "", "", "", "", ""];
let currentPlayerSymbol = "x";
let gameStatus = "";
window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");

  board.addEventListener("click", (event) => {
    const targetId = event.target.id;

    if (!targetId.startsWith("square-")) return;

    const squareIndex = Number.parseInt(targetId[targetId.length - 1]);

    if (squareValues[squareIndex] !== "") return;

    const image = document.createElement("img");
    image.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;
    event.target.appendChild(image);

    squareValues[squareIndex] = currentPlayerSymbol;

    if (currentPlayerSymbol === "x") {
      currentPlayerSymbol = "o";
    } else {
      currentPlayerSymbol = "x";
    }
    checkGameStatus();
  });

  let checkGameStatus = () => {
    // This for loop is for rows
    for (let i = 0; i < 9; i += 3) {
      if (squareValues[i] !== '' &&
        squareValues[i + 1] == squareValues[i] &&
        squareValues[i + 2] == squareValues[i]) {
          gameStatus = squareValues[i];
          console.log(gameStatus);
          break;
          
      }
    }

    // This for loop is for columns
    for (let i = 0; i < 3; i += 1) {
        if (squareValues[i] !== '' &&
            squareValues[i + 3] == squareValues[i] &&
             squareValues[i + 6] == squareValues[i]) {
                gameStatus = squareValues[i];
                console.log(gameStatus);
                break;
        }
    }

    // These for loops is for the diagonals

  }
});
