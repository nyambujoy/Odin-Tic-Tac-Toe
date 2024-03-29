const turnDisplay = document.getElementById("turnDisplay");
const restartBtn = document.querySelector(".restart")
const resultDisplay = document.getElementById("result")
const allCards = document.querySelectorAll(".cards")

// console.log(restartBtn)
let currentPlayer = "X"

allCards.forEach(card => {
    card.addEventListener("click", function () {
        if (card.textContent === "") {
            card.textContent = currentPlayer;
        }

        if (checkWinner(currentPlayer)) {
            resultDisplay.textContent = `Game over! ${currentPlayer} wins!`;
            return;
        }

        if (checkTie()) {
            resultDisplay.textContent = `Game over! It's a tie!`;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        turnDisplay.textContent = `${currentPlayer}'s Turn`;
    });
});








function checkWinner(currentPlayer) {
    let winningComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningComb.length; i++) {
        [a, b, c] = winningComb[i];
        if (allCards[a].textContent === currentPlayer && allCards[b].textContent === currentPlayer && allCards[c].textContent === currentPlayer) {
            return true
        }


    }
    return false
}


function checkTie() {
    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].textContent === "") {
            return false
        }
    }
    return true
}



function restartGame() {
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].textContent = ""
    }
    currentPlayer = "X"
    resultDisplay.textContent = `Games challenge the mind ->`
}






restartBtn.addEventListener("click", restartGame)






