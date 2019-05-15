/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
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
};

const res = maxSubArray([-2, 1,-3,4,-1,2,1,-5,4])
console.log(res)