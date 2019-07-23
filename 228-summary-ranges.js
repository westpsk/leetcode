/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  let res = []
  let start = 0
  for(let i = 0; i < nums.length; i++){
    if(i === 0){
      nums[i+1] - nums[i] !== 1 && res.push(String(nums[i]))
    }else if(i === nums.length - 1){
      if(nums[i] - nums[i-1] !== 1){
        res.push(String(nums[i]))
      }else{
        res.push(`${nums[start]}->${nums[i]}`)
      }
    }else{
      if(nums[i+1] - nums[i] !== 1 && nums[i] - nums[i-1] !== 1){
        res.push(String(nums[i]))
      }else if(nums[i+1] - nums[i] !== 1){
        res.push(`${nums[start]}->${nums[i]}`)
      }
      if(nums[i] - nums[i-1] !== 1){
        start = i
      }
    }
  }
  return res
}
// [0,1,2,4,5,7]
// [-1]
// [1,2,3]
// [0,2,5]
// [1,3,4]
// [1,3,4,6]
const res = summaryRanges([0,2,6,7,9])
console.log(res)