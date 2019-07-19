/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if(nums.length < 3) return nums.length
  let pointer = 1
  let times = 1
  for(let i = 1; i < nums.length; i++){
    if(nums[i] !== nums[i-1]){
      nums[pointer] = nums[i]
      pointer++
      times = 1
    }else if(times < 2 && nums[i] === nums[i-1]){
      nums[pointer] = nums[i]
      pointer++
      times++
    }
  }
  return pointer
}
const nums = [1,1,1,2]
removeDuplicates(nums)