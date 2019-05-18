/**
 * @param {string} s
 * @return {string}
 */

 // 暴力解决办法 O(n^3)
// const longestPalindrome = function(s) {
//   let length = s.length
//   let res = s.charAt(0)
//   for(let i = 0; i < length - 1; i++){
//     for(let j = length - 1; j > i; j--){
//       let start = i
//       let end = j
//       let palindrome = s.slice(start, end+1)
//       let flag = true
//       while(flag && start <= end && palindrome.length > res.length){
//         if(s.charAt(start) === s.charAt(end)){
//           if(start === end || start === end - 1){
//             if(palindrome.length > res.length){
//               res = palindrome
//             }
//           }
//           start++
//           end--
//         }else{
//           flag = false
//         }
//       }
//     }
//   }
//   return res
// }

// DP O(n^2)
const longestPalindrome = function(s) {
  let len = s.length
  let dp = Array.from({length: len}).fill([])
  let res = ''
  for(let i = 0; i < len; i++){
    for(let j = 0; j <= i; j++){
      dp[j][i] = (j+1 > i-1 || dp[j+1][i-1]) && s.charAt(j) === s.charAt(i)
      if(dp[j][i] && res.length < i - j + 1){
        res = s.slice(j, i+1)
      }
    }
  }
  return res
}