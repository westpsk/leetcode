/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let len = 0
  const map = s.split('').reduce((obj, cur) => {
    if(obj[cur]){
      obj[cur]++
    }else{
      obj[cur] = 1
    }
    return obj
  }, {})
  Object.values(map).forEach(item => {
    if(item % 2){
      len += item - 1
    }else{
      len += item
    }
  })
  len = len < s.length ? len + 1 : len
  return len
}