/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  return comb(m+n-2, n-1)
}
const factorial = (num) => {
  if(num < 0) {
    return -1
  }else if(num === 0 || num === 1){
    return 1
  }else{
    return (num * factorial(num - 1))
  }
}
const comb = (m, n) => {
  return factorial(m) / (factorial(n) * factorial(m-n))
}

const result = uniquePaths(7, 3)
console.log(result)