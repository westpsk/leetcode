/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let res = []
  let min = 0
  let max = S.length
  for(let i = 0; i <= S.length; i++){
    if(S[i] === 'I'){
      res[i] = min
      min = min + 1
    }else{
      res[i] = max
      max = max - 1
    }
  }
  return res
}
