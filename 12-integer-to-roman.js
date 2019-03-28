/**
 * @param {number} num
 * @return {string}
 * @rule { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
 */
var intToRoman = function(num) {
  var result = ''
  var tempNum = num
  if(num < 1 || num > 3999) return result

  const mDivisor = Math.floor(num/1000)
  if(mDivisor){
    result += Array(mDivisor).fill('M').join('')
    tempNum -= mDivisor * 1000
  }
  
  const dDivisor = Math.floor(tempNum/500)
  if(dDivisor){
    result = tempNum < 900 ? result + Array(dDivisor).fill('D').join('') : result + 'CM'
    tempNum -= tempNum < 900 ? dDivisor * 500 : 900
  }
  
  const cDivisor = Math.floor(tempNum/100)
  if(cDivisor){
    result = tempNum < 400 ? result + Array(cDivisor).fill('C').join('') : result + 'CD'
    tempNum -= tempNum < 400 ? cDivisor * 100 : 400 
  }
  
  const lDivisor = Math.floor(tempNum/50)
  if(lDivisor){
    result = tempNum < 90 ? result + Array(lDivisor).fill('L').join('') : result + 'XC'
    tempNum -= tempNum < 90 ? lDivisor * 50 : 90
  }
  
  const xDivisor = Math.floor(tempNum/10)
  if(xDivisor){
    result = tempNum < 40 ? result + Array(xDivisor).fill('X').join('') : result + 'XL'
    tempNum -= tempNum < 40 ? xDivisor * 10 : 40
  }

  const vDivisor = Math.floor(tempNum/5)
  if(vDivisor){
    result = tempNum < 9 ? result + Array(vDivisor).fill('V').join('') : result + 'IX'
    tempNum -= tempNum < 9 ? vDivisor * 5 : 9
  }

  if(tempNum){
    result = tempNum < 4 ? result + Array(tempNum).fill('I').join('') : result + 'IV'
  }
  return result
};

var res = intToRoman(7)
console.log(res)