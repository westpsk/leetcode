/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
  let len = nums.length
  if(nums.length < 2) return len
  let up = down = 1
  for(let i = 1; i < len; i++){
    if(nums[i] > nums[i-1]){
      up = down + 1
    }
    if(nums[i] < nums[i-1]){
      down = up + 1
    }
  }
  return Math.max(up, down)
};

const res = wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])
console.log(res)