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
  if (sub.length > num) return
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) {
      continue
    }
    sub.push(arr[i])
    dfs(arr, i + 1, sub, res, num, target - arr[i])
    sub.pop()
  }
}

const arr = [1, 3, 4, 5, -1]
const target = 9
const res = fourSum(arr, target)
console.log(res)
