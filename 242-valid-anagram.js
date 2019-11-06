/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

// another
const isAnagramAnother = function(s, t) {
  let sChars = s.split('')
  let tChars = t.split('')
  let map = new Map()
  for(let char of sChars) {
    let count = map.get(char) || 0
    if(count) {
      map.set(char, count + 1)
    }else{
      map.set(char, 1)
    }
  }
  for(let char of tChars) {
    let count = map.get(char)
    if(count === 1) {
      map.delete(char)
    }else{
      map.set(char, count - 1)
    }
  }
  return map.size === 0
}