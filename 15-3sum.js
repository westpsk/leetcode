/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode: https://leetcode.com/problems/3sum/
 */
var threeSum = function(nums) {
  let length = nums.length
  let res = []
  if(length < 3) return res
  const sortedList = nums.sort((a,b)=> a-b)
  for(let i = 0; i < length - 1; i++){
    let j = i + 1
    let k = length - 1
    if(i === 0 || nums[i] > nums[i - 1]){
      while(j < k){
        let sum = sortedList[i]+sortedList[j]+sortedList[k]
        if(sum === 0){
          res.push([sortedList[i], sortedList[j], sortedList[k]])
          j = j + 1
          k = k - 1
          while(j < k && sortedList[j] === sortedList[j-1]){
            j = j + 1
          }
          while(k > j && sortedList[k] === sortedList[k+1]){
            k = k - 1
          }
        }else if(sum > 0){
          k = k - 1
        }else{
          j = j + 1
        }
      }
    }
  }
    
  return res
};
console.time()
var nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
var res = threeSum(nums)
console.log(res)
console.timeEnd()