/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  let res = []
  dfs(nums.sort((a, b) => a - b), 0, [], res, 4, target)
  return res
}

const dfs = (arr, index, sub, res, num, target) => {
  if (sub.length === num && target === 0) {
    return res.push(sub.slice())
  }
  if (sub.length > num || arr.slice(-1) * num < target) return
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) {
      continue
    }
    // 避免一些不必要都case
    if (arr[i] * (num - sub.length) <= target) {
      sub.push(arr[i])
      dfs(arr, i + 1, sub, res, num, target - arr[i])
      sub.pop()
    }
  }
}

const res = fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)
console.log(res)
