/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode: https://leetcode.com/problems/3sum/
 */
var threeSum = function(nums) {
  let length = nums.length
  let res = []
  let resStringMap = {}
  if(length < 3) return res
  for(let i = 0; i < length - 2; i++){
    for(let j = i+1; j < length - 1; j++){
      for(let k = j+1; k < length; k++){
        if(nums[i]+nums[j]+nums[k] === 0){
          let sortItem = [nums[i], nums[j], nums[k]].sort()
          let stringItem = sortItem.join()
          if(!resStringMap[stringItem]){
            res.push(sortItem)
            resStringMap[stringItem] = true
          }
        }
      }
    }
  }
  return res
};

var nums = [-1, 0, 1, 2, -1, -4];
var res = threeSum(nums)
console.log(res) 