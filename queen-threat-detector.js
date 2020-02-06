
const checkDiagonal = function(queen1, queen2) {
  let diagonal1 = Math.abs(queen1[0] - queen2[0]);
  let diagonal2 = Math.abs(queen1[1] - queen2[1]);
  return diagonal1 === diagonal2 ? true : false;
};

const generateBoard = function(whiteQueen, blackQueen) {
  const chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
};

const queenThreat = function(chessBoard) {
  let queen1;
  let queen2;
  for (let i = 0; i < chessBoard.length; i++) {
    for (let j = 0; j < chessBoard[i].length; j++) {
      if (chessBoard[i][j] !== 0) {
        if (queen1 === undefined) {
          queen1 = [i, j];
        } else {
          queen2 = [i, j];
        }
      }
    }
  }
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
    return true;
  } else if (checkDiagonal(queen1, queen2)) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [5, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));