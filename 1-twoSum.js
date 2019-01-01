/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp = {}
  let res
  nums.map((item, index) => {
    let minus = target - item
    if(temp[item]>=0){
      res = [temp[item], index]
    }else{
      temp[minus] = index
    }
  })
  return res
}

let res = twoSum([1, 2], 3)
console.log(res)
