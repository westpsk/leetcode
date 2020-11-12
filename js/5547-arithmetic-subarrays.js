/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = function (nums, l, r) {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    let arr = nums.slice(l[i], r[i] + 1);
    const checkd = isArithmetic(arr);
    res.push(checkd);
  }
  return res;
};

const isArithmetic = (arr) => {
  arr.sort((a, b) => a - b);
  let gap = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== gap) {
      return false;
    }
  }
  return true;
};
let nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
  l = [0, 1, 6, 4, 8, 7],
  r = [4, 4, 9, 7, 9, 10];
const res = checkArithmeticSubarrays(nums, l, r);
console.log(res);
