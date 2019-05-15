/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const sortColors = function(nums) {
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(nums[i] > nums[j]){
//         [nums[i], nums[j]] = [nums[j], nums[i]]
//       }
//     }
//   }
//   return nums
// };

// tow pointers
const sortColors = function(nums) {
  let start = 0
  let end = nums.length - 1
  for(let i = 0; i <= end; i++){
    if(start < end){
      if(nums[i] === 2) {
        [nums[i], nums[end]] = [nums[end], nums[i]]
        end--
        i--
      }else if(nums[i] === 0){
        [nums[i], nums[start]] = [nums[start], nums[i]]
        start++
      }
    }
  }
  return nums
}

let res = sortColors([1, 2, 0])
console.log(res)