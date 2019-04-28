/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let map = new Map()
  Array.from({length: nums.length+1}, (item, index) => {
    map.set(index+1, index+1)
  })
  for(let i = 0; i < nums.length; i++){
    map.delete(nums[i])
  }
  return Array.from(map.keys())[0] || 1
};

firstMissingPositive([0,-1])