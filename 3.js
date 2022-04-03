function chessBoard(rows = 8, cols = 8) {
let board = '';
    let symbolChess = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            symbolChess = ((i + j) % 2 === 0) ? symbolChess = '#' : symbolChess = ' ';    
            board += symbolChess;
        }
        board += "\n";
    }
    console.log(board);
}

chessBoard();

// chessBoard(5, 5)