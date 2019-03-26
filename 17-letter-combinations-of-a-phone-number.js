/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return []
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  let inputList = digits.split('')
  let result = map[inputList[0]].split('')
  while(inputList.length > 1){
    let arr2 = map[inputList[1]].split('')
    let temp = []
    for(let i = 0; i < result.length; i++){
      for(let j = 0; j < arr2.length; j++){
        temp.push(`${result[i]}${arr2[j]}`)
      }
    }
    result = temp
    inputList = inputList.splice(1)
  }
  return result
};

let res = letterCombinations('aa')
console.log(res)