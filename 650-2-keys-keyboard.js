/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if(n === 1) return 0
  let res = 0
  for(let i = 2; i <= Math.sqrt(n); i++){
    console.log('i', i)
    if(n%i === 0){
      res += i
      n /= i
      i--
    }
  }
  return res + n
};

const res = minSteps(12)
console.log(res)