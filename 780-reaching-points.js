/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
const reachingPoints = function(sx, sy, tx, ty) {
  if(tx < sx || ty < sy) {
    return false
  }else if(tx > sx && ty > sy){
    if(tx > ty){
      return reachingPoints(sx, sy, tx - ty, ty)
    }else{
      return reachingPoints(sx, sy, tx, ty - tx)
    }
  }else{
    if((tx === sx && (ty-sy)%tx === 0) || (sy === ty && (tx-sx)%ty === 0)) {
      return true
    }
    return false
  }
};

const res = reachingPoints(1,2,1000000000,2)
console.log(res)