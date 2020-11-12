/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length
  let pointer = 1
  let len = nums.length
  for(let i = 1; i < len; i++){
    if(nums[i] !== nums[i-1]){
      nums[pointer] = nums[i] 
      pointer++
    }
  }
  return pointer
}
const res = removeDuplicates([1,1,2,1])