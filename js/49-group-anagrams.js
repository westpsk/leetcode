/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}
  strs.forEach((item, index) => {
    let str = item.split('').sort((a, b) => a > b).join('')
    if(map[str]){
      map[str].push(item)
    }else{
      map[str] = [item]
    }
  })
  return Object.values(map)
};

let input = ["e1t", "te1", "tan", "ate", "nat", "bat"]
let res = groupAnagrams(input)
console.log(res)