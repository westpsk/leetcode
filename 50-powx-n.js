/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 递归
const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x, n - 1);
};

// 二分
const myPow = function (x, n) {
  if (n == 0) return 1;
  let pow = Math.abs(n);
  let res = 1;
  while (pow) {
    if (pow % 2 === 1) {
      res *= x;
    }
    pow = Math.floor(pow / 2);
    x *= x;
  }
  return n > 0 ? res : 1 / res;
};
