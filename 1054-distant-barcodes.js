/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  let map = {}
  let len = barcodes.length
  for(let i = 0; i < len; i++){
    if(map[barcodes[i]]){
      map[barcodes[i]]++
    }else{
      map[barcodes[i]] = 1
    }
  }
  const keys = Object.keys(map).sort((a, b) => map[a] - map[b])
  let idx = 1
  for(let k of keys){
    let t = map[k]
    for(let i = 0; i < t; i++){
      if(idx >= barcodes.length) idx = 0
      barcodes[idx] = k
      idx += 2
    }
  }
  return barcodes
}
