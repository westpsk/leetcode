/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const sortList = candidates.sort((a,b) => a - b)
  let list = []
  dfs(sortList, 0, target, [], list)
  return list
};

const dfs = (candidates, index, target, subset, list) => {
  if(target === 0){
    list.push(subset.slice())
  }
  if(target <=0 || index >= candidates.length) return
  const value = candidates[index]
  subset.push(value)
  dfs(candidates, index+1, target - value, subset, list)
  subset.pop()
  while(index < candidates.length && candidates[index] === value){
    index += 1
  }
  dfs(candidates, index, target, subset, list)
}

let candidates = [10,1,2,7,6,1,5]
let target = 8
let res = combinationSum2(candidates, target)
console.log(res)