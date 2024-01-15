function GameBoard() {
    let rows = 3;
    let columns = 3;
    let board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push("")
        }
    }
    return board
}

const initialBoard = GameBoard();
console.log(initialBoard);


function gamePlayers() {
    const players = [
        {
            name: "player x",
            marker: "X"
        },
        {
            name: "player 0",
            marker: "0"
        },

    ]

    return players
}

console.log(gamePlayers())



