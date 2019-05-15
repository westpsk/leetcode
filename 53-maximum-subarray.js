/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let sum = 0
  let list = []
  for(let i = 0; i < nums.length; i++){
    if(nums[i] + sum < nums[i]){
      sum = nums[i]
    }else{
      sum += nums[i]
    }
    list.push(sum)
  }
  return Math.max(...list)
}