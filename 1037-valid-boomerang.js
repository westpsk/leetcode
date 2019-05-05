/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  let list = [
    distance(points[0], points[1]),
    distance(points[1], points[2]),
    distance(points[0], points[2])
  ]
  list = list.sort((a, b) => a - b)
  if(list[0] !== 0 && list[0] + list[1] !== list[2]){
    return true
  }
  return false
};

var distance = (A, B) => {
  return Math.sqrt((A[1] - B[1])*(A[1] - B[1]) + (A[0] - B[0])*(A[0] - B[0]))
}