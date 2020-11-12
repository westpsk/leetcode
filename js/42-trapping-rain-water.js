/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  if(height.length < 2) return 0
  const min = (a, b) => (Math.min(a, b))
  let i = 0,
      j = height.length - 1,
      tall = min(height[i], height[j]),
      sum = tall*Math.abs(i-j-1)
  for(i,j; i <= j; ){
    let left = height[i],
        right = height[j],
        cur = min(left, right)
    if(left < right){
      i++
    }else{
      j--
    }
    if(cur <= tall){
      sum -= cur
    }else{
      sum += (cur - tall)*Math.abs(i-j-1) - tall
      tall = cur
    }
  }
  return sum
};

let length = [1,1]
let res = trap(length)
console.log(res)
