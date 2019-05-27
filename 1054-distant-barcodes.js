/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  let list = barcodes.slice().sort((a, b) => a - b)
  let len = list.length
  let pointer = 1
  for(let i = 1; i < list.length/2; ){
    [list[i], list[len-pointer]] = [list[len-pointer], list[i]]
    i = i+2
    pointer++
  }
  return list
}
const res = rearrangeBarcodes([1,1,1,1,2,2,3,3])
console.log(res)