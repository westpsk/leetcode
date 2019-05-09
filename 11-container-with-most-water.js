/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   let max = 0
//   let len = height.length
//   for(let i = 0; i < len - 1; i++){
//     for(let j = len - 1; j > i; j--){
//       let temp = (j - i) * Math.min(height[i], height[j])
//       if(temp > max) {
//         max = temp
//       }
//     }
//   }
//   return max
// };

var maxArea = function(height) {
  let res = temp = 0
  let len = height.length
  for(let i = 0, j = len - 1; i < j; ){
    let temp = (j - i) * Math.min(height[i], height[j])
    if(temp > res) {
      res = temp
    }
    if(height[i] < height[j]){
      i++
    }else{
      j--
    }
  }
  return res
};