/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let min = Math.max(...prices)
  let sum = 0
  for(let i = 0; i < prices.length; i++){
    if(prices[i] < min){
      min = prices[i]
    }else if(prices[i] - min > sum){
      sum = prices[i] - min
    }
  }
  return sum
}

const res = maxProfit([7,1,5,3,6,4])
console.log(res)