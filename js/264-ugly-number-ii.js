/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  if(n < 1) return false
  let list = [1]
  let p2 = p3 = p5 = 0
  for(let i = 1; i < n; i++){
    list[i] = Math.min(list[p2]*2, list[p3]*3, list[p5]*5)
    if(list[i] === list[p2]*2) p2++
    if(list[i] === list[p3]*3) p3++
    if(list[i] === list[p5]*5) p5++
  }
  return list[n-1]
}

const res = nthUglyNumber(10)
console.log(res)