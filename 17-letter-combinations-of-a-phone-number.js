/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  if(!digits) return []
  let inputNumList = digits.split('')
  let result = map[inputNumList[0]] ? map[inputNumList[0]].split('') : []
  while(inputNumList.length > 1){
    let arr2 = map[inputNumList[1]] ? map[inputNumList[1]].split('') : []
    let temp = []
    for(let i = 0; i < result.length; i++){
      for(let j = 0; j < arr2.length; j++){
        temp.push(`${result[i]}${arr2[j]}`)
      }
    }
    result = temp
    inputNumList = inputNumList.splice(1)
  }
  return result
};

let res = letterCombinations('aa')
console.log(res)