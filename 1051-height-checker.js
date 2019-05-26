/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let res = 0
  let temp = heights.slice()
  temp.sort((a, b) => a - b)
  for(let i = 0; i < temp.length; i++){
    if(temp[i] !== heights[i]){
      res++
    }
  }
  return res
}
