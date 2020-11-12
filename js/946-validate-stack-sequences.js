/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  var list = []
  let pointer = 0
  for(let num of pushed){
    list.push(num)
    while(list.length && popped[pointer] === list[list.length-1]){
      list.pop()
      pointer++
    }
  }
  return !list.length
}

var pushed = []
var popped = []
var res = validateStackSequences(pushed, popped)
console.log(res)