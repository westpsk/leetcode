/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let list = []
  let sum = 0
  let pointer = 0
  let res = 0
  for(let i = 0; i < customers.length; i++){
    list.push(customers[i]*grumpy[i])
  }
  for(let i = 0; i <= list.length - X; i++){
    let tempSum = 0
    for(let j = 0; j < X; j++){
      tempSum += list[i+j]
    }
    if(tempSum > sum){
      sum = tempSum
      pointer = i
    }
  }

  for(let i = pointer; i < pointer + X; i++){
    grumpy[i] = 0
  }

  for(let i = 0; i < customers.length; i++){
    res += customers[i]*(grumpy[i]^1)
  }
  return res
}

const customers = [1,0,1,2,1,1,7,5]
const grumpy =    [0,1,0,1,0,1,0,1]
const X = 0
const res = maxSatisfied(customers, grumpy, X)
console.log(res)