/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  for(let i = 1; i < nums.length; i++){
    if(nums[i] - nums[i-1] > res){
      res = nums[i] - nums[i-1]
    }
  }
  return res
};
maximumGap([2])