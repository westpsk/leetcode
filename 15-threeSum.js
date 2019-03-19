/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode: https://leetcode.com/problems/3sum/
 */
var threeSum = function(nums) {
  let length = nums.length
  let res = []
  if(length < 3) return res
  let resStringMap = {}
  const sortedList = nums.sort((a,b)=> a-b)
  for(let i = 0, j = length - 1; i < j; ){
    let twoSum = sortedList[i]+sortedList[j]
    let minus = twoSum === 0 ? 0 : -twoSum
    if(~sortedList.slice(i+1, j).indexOf(minus)){
      let sortItem = [sortedList[i], sortedList[j], minus].sort()
      let stringItem = sortItem.join()
      if(!resStringMap[stringItem]){
        res.push(sortItem)
        resStringMap[stringItem] = true
      }
    }
    if(sortedList[i] >= minus){
      j = j - 1
    }else{
      i = i + 1
    }
  }
  return res
};
console.time()
var nums = [-2,0,1,1,2];
var res = threeSum(nums)
console.log(res)
console.timeEnd()