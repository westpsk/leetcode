/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  let res = []
  let start = 0
  for(let i = 1; i < nums.length+1; i++){
    if(nums[i] - nums[i-1] !== 1){
      if(i-1 === start){
        res.push(nums[start]+'')
      }else{
        res.push(`${nums[start]}->${nums[i-1]}`)
      }
      start = i
    }
  }
  return res
}
const res = summaryRanges([-1])
console.log(res)