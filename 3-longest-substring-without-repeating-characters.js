/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let result = 0,
    i = 0;
  let map = {};
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]]) {
      i = Math.max(map[s[j]], i);
    }
    result = Math.max(result, j - i + 1);
    map[s[j]] = j + 1;
  }
  return result;
};

// slide window
const lengthOfLongestSubstring = function (s) {
  let slideArr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const index = slideArr.indexOf(s[i]);
    if (~index) {
      slideArr.splice(0, index + 1);
    }
    slideArr.push(s[i]);
    max = Math.max(max, slideArr.length);
  }
  return max;
};
