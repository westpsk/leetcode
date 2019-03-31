/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  const MAX = 1000
  if(n < 1 || n > MAX) return false
  const primeList = findPrime(MAX)
  let mutiList = []
  mutiList = findMuti(n, primeList, mutiList)
  const step = mutiList.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return step
};

const findMuti = (n, primeList, mutiList) => {
  console.log(mutiList)
  for(let prime of primeList){
    if(n%prime === 0){
      mutiList.push(prime)
      findMuti(n/prime, primeList, mutiList)
      break
    }
  }
  return mutiList
}

const findPrime = (max) => {
  let primeList = []
  for(let n = 2; n <= max; n++){
    isPrime(n) && primeList.push(n)
  }
  return primeList
}

const isPrime = (n) => {
  let flag = true
  for(let i = 2; i <= Math.ceil(n/2); i++){
    if(n%i === 0) flag = false 
  }
  return flag
}

const res = minSteps(10)
console.log(res)