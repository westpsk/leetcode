/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  let long = matrix.length;
  let width = matrix[0] && matrix[0].length;
  let map = Array.from(new Array(long));
  let max = 0;
  for (let i = 0; i < long; i++) {
    map[i] = new Array(width).fill(0);
    for (let j = 0; j < width; j++) {
      let left, top, cross;
      top = i === 0 ? 0 : map[i - 1][j];
      left = j === 0 ? 0 : map[i][j - 1];
      cross = i === 0 || j === 0 ? 0 : map[i - 1][j - 1];
      if (matrix[i][j] != 0) {
        map[i][j] = Math.min(left, top, cross) + 1;
      }
      max = map[i][j] > max ? map[i][j] : max;
    }
  }
  return max * max;
};

let input = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
const res = maximalSquare(input);
console.log(res);
