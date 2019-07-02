/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  let res = strs[0]
  for(let str of strs){
    while(str.indexOf(res) !== 0){
      res = res.substring(0, res.length - 1)
    }
  }
  return res
}

var res = longestCommonPrefix(["flewer", 'a'])
console.log(res)