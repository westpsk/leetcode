/**
 * @param {number[]} arr
 * @param {number} target
 * @param {number} num
 * @return {number[][]}
 */
const nSum = function (arr, target, num=4) {
  let length = arr.length
  let bit = 1 << length
  let res = []
  let arrMap = {}
  for(let i = 0; i < bit; i++){
    if(one(i) === num){
      let sum = 0
      let temp = []
      for(let j = 0; j < arr.length; j++){
        if((i & (1 << j)) !== 0){
          sum += arr[j]
          temp.push(arr[j])
        }
      }
      if(sum === target){
        if(!inArray(temp.slice(), arrMap)){
          res.push(temp.slice())
        }
      }
    }
  }
  return res
}

const one = (num) => {
  let count = 0
  while(num){
    num &= num - 1
    count++
  }
  return count
}

const inArray = (arr, arrMap) => {
  arr.sort((a, b) => a - b)
  if(!arrMap[arr.join()]){
    arrMap[arr.join()] = true
    return false
  }
  return true
}

const res = nSum([1, 0, -1, 0, 0, 0, -3], 0)
console.log(res)