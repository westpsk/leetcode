/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) return intervals
  let sorted = intervals.sort((a, b) => a[0] - b[0])
  let pointer = 0
  sorted.push(sorted[sorted.length - 1])
  while (pointer < sorted.length - 1) {
    if (sorted[pointer][1] >= sorted[pointer + 1][0]) {
      const max = Math.max(sorted[pointer][1], sorted[pointer + 1][0], sorted[pointer + 1][1])
      sorted.splice(pointer, 2, [sorted[pointer][0], max])
    } else {
      pointer++
    }
  }
  return sorted
}
const res = merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])
console.log(res)
