/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if(n < 1 || n > 1000) return false
  const step = primeStepMap()
  return step[n]
};

const primeStepMap = () => {
  let step = {
    1: 0
  }
  for(let n = 2; n < 1001; n++){
    if(isPrime(n)){
      step[n] = n
    }else{
      for(let num in Object.keys(step)){
        if(n%num === 0){
          step[n] = step[num] + step[n/num]
        }
      }
    }

  }
  return step
}

const isPrime = (n) => {
  let flag = true
  for(let i = 2; i <= Math.ceil(n/2); i++){
    if(n%i === 0) flag = false 
  }
  return flag
}

const res = minSteps(11)
console.log(res)