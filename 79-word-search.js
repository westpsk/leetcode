/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var xLen = board.length;
  var yLen = board[0].length;
  for(let col = 0; col < xLen; col++){
    for(let row = 0; row < yLen; row++){
      if(checkExit(board, col, row, word, 0)) return true
    }
  }
  return false
};

const checkExit = (board, col, row, word, point) => {
  if(point === word.length) return true
  if(col < 0 ||
     row < 0 ||
     col > board.length - 1 || 
     row > board[0].length - 1 ||
     board[col][row] === null ||
     board[col][row] !== word[point]
    ) return false
  const dirs = [[0,1], [0, -1], [-1, 0], [1, 0]]
  const tempPoint = board[col][row] 
  board[col][row] = null
  for(let dir of dirs){
    if(checkExit(board, col + dir[0], row + dir[1], word, point+1)){
      return true
    }
  }
  board[col][row] = tempPoint
  return false
}

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let res = exist(board, "ABCCED")
console.log(res)
