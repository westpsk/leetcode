/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  let len = height.length
  for(let i = 0; i < len - 1; i++){
    for(let j = len - 1; j > i; j--){
      let temp = (j - i) * Math.min(height[i], height[j])
      if(temp > max) {
        max = temp
      }
    }
  }
  return max
};