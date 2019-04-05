/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const subGrid = []

  for(let i = 0; i < row; i++){
    subGrid[i] = []
    for(let j = 0; j < col; j++){
      if(i === 0 && j === 0){
        subGrid[i][j] = 1
      }else if(obstacleGrid[i][j] === 1){
        subGrid[i][j] = 0
      }else if(i === 0){
        subGrid[i][j] = subGrid[i][j-1]
      }else if(j === 0){
        subGrid[i][j] = subGrid[i-1][j]
      }else{
        subGrid[i][j] = subGrid[i-1][j] + subGrid[i][j-1]
      }
    }
  }
  return subGrid[row-1][col-1]
}

const grid = [
  [0,0],
  [0,0],
  [0,0],
]
const res = uniquePathsWithObstacles(grid)
console.log(res)