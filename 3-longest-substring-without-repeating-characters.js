/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let result = 0,
      i = 0
  let map = {}
  for(let j = 0; j < s.length; j++) {
    if(map[s[j]]) {
      i = Math.max(map[s[j]], i)
    }
    result = Math.max(result, j - i + 1)
    map[s[j]] = j + 1
  }
  return result
}