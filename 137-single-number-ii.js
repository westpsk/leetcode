/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = ~twos & (ones ^ nums[i]);
    twos = ~ones & (twos ^ nums[i]);
  }
  return ones;
};
