/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  return A.map(item => item*item).sort((a, b) => a - b)
};