/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = 2 ** 31 - 1;
  const min = -max;
  // const sign = Math.sign(x)
  let res = (Math.abs(x) + "").split("").reverse().join("");
  if (res > max || res < min) {
    return 0;
  }
  return x < 0 ? -res : +res;
};
