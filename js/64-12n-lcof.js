/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  if (n === 0) return 0;
  let help = (n) => {
    if (n === 1) return 1;
    return help(n - 1) + n;
  };
  return help(n);
};
