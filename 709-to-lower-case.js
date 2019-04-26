/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let charCodeOfA = 'A'.charCodeAt();
  let charCodeOfZ = 'Z'.charCodeAt();
  let difference = 'a'.charCodeAt() - charCodeOfA;
  return str.split('').map(item => {
    let currChar = item.charCodeAt()
    return currChar <= charCodeOfZ && currChar >= charCodeOfA ? String.fromCharCode(currChar + difference) : item
  })
};

const res = toLowerCase('AA')
console.log(res)