/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function(p1, p2, p3, p4) {
  let list = [
    distance(p1, p2),
    distance(p1, p3),
    distance(p1, p4),
    distance(p2, p3),
    distance(p2, p4),
    distance(p3, p4)
  ]
  let dis = Array.from(new Set(list)).sort((a, b) => a - b)
  if(dis.length === 2 && dis[0]*2 === dis[1]){
    return true
  }
  return false
};

const distance = (point1, point2) => {
  return (point1[0] - point2[0])*(point1[0] - point2[0]) + (point1[1] - point2[1])*(point1[1] - point2[1])
}