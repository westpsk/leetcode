/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length) return 0;
  let long = matrix.length;
  let width = matrix[0] && matrix[0].length;
  let map = Array.from(new Array(long + 1)).fill(new Array(width + 1).fill(0));
  let max = 0;
  for (let i = 1; i < long; i++) {
    for (let j = 1; j < width; j++) {
      if (matrix[i][j]) {
        map[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) +
          1;
        max = map[i][j] > max ? max[i][j] : max;
      }
    }
  }
  return max;
};
