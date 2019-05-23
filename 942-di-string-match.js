/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let res = []
  let min = 0
  let max = S.length
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) === 'I'){
      res[i] = min
      min = min + 1
    }else if(S.charAt(i) === 'D'){
      res[i] = max
      max = max - 1
    }
  }
  if(S.charAt(S.length - 1) === 'I'){
    res[S.length] = min
  }else{
    res[S.length] = max
  }
  return res
}