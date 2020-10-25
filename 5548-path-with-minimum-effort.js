/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  let rowLen = heights.length;
  let colLen = heights[0].length;
  let dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let l = 0,
    h = Math.pow(10, 6);
  while (l < h) {
    let mid = l + ((h - l) >> 1);
    if (bfs(mid)) {
      h = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
  function bfs(val) {
    const queue = [[0, 0]];
    const visited = new Set();
    while (queue.length) {
      let [x, y] = queue.shift();
      if (x === rowLen - 1 && y === colLen - 1) return true;
      for (let item of dirs) {
        let nx = x + item[0];
        let ny = y + item[1];
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= rowLen ||
          ny >= colLen ||
          visited.has(`${nx}-${ny}`)
        )
          continue;
        if (Math.abs(heights[nx][ny] - heights[x][y]) > val) continue;
        visited.add(nx + "-" + ny);
        queue.push([nx, ny]);
      }
    }
    return false;
  }
};

let heights = [
  [1, 2, 1, 1, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 2, 1],
];
const res = minimumEffortPath(heights);
console.log(res);
