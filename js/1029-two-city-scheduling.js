/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let sum = 0
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
  let N = costs.length / 2
  for(let i = 0; i < costs.length; i++){
    if(i < N){
      sum += costs[i][0]
    }else{
      sum += costs[i][1]
    }
  }
  return sum
};

const costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
const res = twoCitySchedCost(costs)
console.log(res)