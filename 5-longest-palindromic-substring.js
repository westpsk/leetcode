/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let length = s.length
  let res = s.charAt(0)
  for(let i = 0; i < length - 1; i++){
    for(let j = length - 1; j > i; j--){
      let start = i
      let end = j
      let palindrome = s.slice(start, end+1)
      let flag = true
      while(flag && start <= end && palindrome.length > res.length){
        if(s.charAt(start) === s.charAt(end)){
          if(start === end || start === end - 1){
            if(palindrome.length > res.length){
              res = palindrome
            }
          }
          start++
          end--
        }else{
          flag = false
        }
      }
    }
  }
  return res
}