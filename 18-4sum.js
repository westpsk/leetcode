/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  let res = []
  dfs(nums, 0, [], res, 4, target)
  return res
}

const dfs = (arr, index, sub, res, num, target) => {
  if (sub.length === num && sum(sub) === target) {
    return res.push(sub.slice())
  }
  if (sub.length > num) return
  for (let i = index; i < arr.length; i++) {
    sub.push(arr[i])
    dfs(arr, i + 1, sub, res, num, target)
    sub.pop()
  }
}

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur)
}

const res = fourSum([3, 2, 4, 5, 1], 14)
console.log(res)
