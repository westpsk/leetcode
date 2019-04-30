/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  let odd = A.filter(item => item%2)
  let even = A.filter(item => item%2 - 1)
  return even.concat(odd)
}