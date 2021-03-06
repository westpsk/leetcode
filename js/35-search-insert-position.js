/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var find = function(nums, target){
  let len = nums.length
  if(len < 2){
    return {
      num: nums[0],
      small: nums[0] > target ? true : false
    }
  }
  if(nums[Math.floor(len/2)-1] > target){
    nums = nums.slice(0, Math.floor(len/2))
  }else{
    nums = nums.slice(Math.floor(len/2))
  }
  return find(nums, target)
}

var searchInsert = function(nums, target) {
  if(~nums.indexOf(target)){
    return nums.indexOf(target)
  }
  
  const preTarget = find(nums, target)
  var index = preTarget.small ? nums.indexOf(preTarget.num) : nums.indexOf(preTarget.num) + 1
  return index
};

var nums = [1,3,5,6]
var target = 8

var res = searchInsert(nums, target)
console.log(res)