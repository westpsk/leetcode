/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  let list = Array(N+1).fill(0)
  for(let item of trust){
    list[item[1]]++
    list[item[0]]--
  }
  for(let i = 1; i <= N; i++){
    if(list[i] === N-1) {
      return i
    }
  }
  return -1
}

const res = findJudge(2, [[1,2]])
console.log(res)