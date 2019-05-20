/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let len = 0
  let obj = {}
  s.split('').forEach(item => {
    if(obj[item]){
      obj[item]++
    }else{
      obj[item] = 1
    }
  })
  Object.values(obj).forEach(item => {
    if(item % 2){
      len += item - 1
    }else{
      len += item
    }
  })
  len = len < s.length ? len + 1 : len
  return len
}
