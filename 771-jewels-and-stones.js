/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  const jL = J.split('')
  let sum = 0
  S.split('').forEach(item => {
    if(~jL.indexOf(item)){
      sum++
    }
  })
  return sum
}

const res = numJewelsInStones('aA', 'aAAabbbb')
console.log(res)