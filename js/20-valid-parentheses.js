/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;
  let list = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const pre = list[list.length - 1];
    if (
      (s[i] === ")" && pre === "(") ||
      (s[i] === "]" && pre === "[") ||
      (s[i] === "}" && pre === "{")
    ) {
      list.pop();
    } else {
      list.push(s[i]);
    }
  }
  return list.length ? false : true;
};
