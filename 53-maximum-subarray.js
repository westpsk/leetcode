/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let sum = 0;
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + sum < nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    list.push(sum);
  }
  return Math.max(...list);
};

// 在线求解
const maxSubArray = function (nums) {
  let thisSum = (maxSum = nums[0]);
  let pre = 0;
  for (let i = 1; i < nums.length; i++) {
    thisSum = Math.max(nums[i], thisSum + nums[i]);
    maxSum = Math.max(thisSum, maxSum);
  }
  return maxSum;
};

// 动态规划
const maxSubArray = function (nums) {
  let res = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    res = Math.max(res, sum);
  }
  return res;
};
