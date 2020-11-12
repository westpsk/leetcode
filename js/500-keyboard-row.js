/**
 * @param {string[]} words
 * @return {string[]}
 */
const keyboardMap = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"]
]
const findWords = function(words) {
  let res = []
  words.forEach(word => {
    if(helper(word)){
      res.push(word)
    }
  })
  return res
};

const helper = (word) => {
  let res = false
  for(let i = 0; i < keyboardMap.length; i++){
    if(word.split('').every(item => ~keyboardMap[i].indexOf(item.toLowerCase()))){
      res = true
      break
    }
  }
  return res
}
const input = ["Hello","Alaska","Dad","Peace"]
let res = findWords(input)
console.log(res)
