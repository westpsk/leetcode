/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  dfs(nums, 0, [], res)
  return res
}

const dfs = (nums, index, subset, res) => {
  res.push(subset.slice())
  for (let i = index; i < nums.length; i++) {
    subset.push(nums[i])
    dfs(nums, i + 1, subset, res)
    subset.pop()
  }
}

const res = subsets([1, 2, 3, 4])
console.log(res)
