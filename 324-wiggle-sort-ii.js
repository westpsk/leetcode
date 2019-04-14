/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
  const sort = nums.sort((a, b) => a-b)
  const list = []
  let half = Math.floor(nums.length/2)
  for(let i = 0; i < sort.length; i++){
    if(i%2 === 1){
      list[i] = sort[half+Math.floor(i/2)]
    }else{
      list[i] = sort[Math.floor(i/2)]
    }
  }
  console.log(list)
  return list
}

var nums = [1,5,1,1,6,4]
var res = wiggleSort(nums)
console.log(res)