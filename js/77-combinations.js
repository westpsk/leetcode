/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  let list = []
  dfs(1, n, k, list, [])
  return list
}

const dfs = (index, n, k, list, subset) => {
  if(subset.length === k){
    list.push(subset.slice())
  }else{
    for(let i = index; i < n+1; i++){
      subset.push(i)
      dfs(i+1, n, k, list, subset)
      subset.pop()
    }
  }
}