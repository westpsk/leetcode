/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function(amount, coins) {
  const dp = []
  for(let i = 0; i <= coins.length; i++){
    dp[i] = Array(amount+1).fill(0)
  }
  dp[0][0] = 1
  for(let i = 1; i <= coins.length; i++){
    dp[i][0] = 1
    for(let j = 1; j <= amount; j++){
      dp[i][j] = dp[i-1][j] + (j >= coins[i-1] ? dp[i][j-coins[i-1]] : 0)
    }
  }
  return dp[coins.length][amount]
};

const res = change(10, [10])
console.log(res)