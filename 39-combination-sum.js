/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  const list = []
  const sortList = candidates.sort((a, b) => a - b)
  dfs(sortList, 0, target, [], list)
  return list
}

const dfs = (candidates, index, target, subset, list) => {
  if(target === 0){
    list.push(subset.slice())
  }
  for(let i = index; i < candidates.length && target >= candidates[i]; i++){
    subset.push(candidates[i])
    dfs(candidates, i, target - candidates[i], subset, list)
    subset.pop()
  }
}

const res = combinationSum([2,3,6,7], 7)
console.log(res)