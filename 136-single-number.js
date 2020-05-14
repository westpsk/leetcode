/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]];
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map)[0];
};

// & 按位与
// | 按位或
// ~ 按位取反
// ^ 按位异或
// << 左移
// >> 右移
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
