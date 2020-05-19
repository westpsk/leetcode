/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// https://www.youtube.com/watch?v=x3mm5a_CwRM
const findOrder = (numCourses, prerequisites) => {
  // 拓扑排序，顶点 map
  const vertex = [...Array(numCourses)].map((r) => []);
  const res = [];
  for (let [u, v] of prerequisites) {
    vertex[v].push(u);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, vertex, new Set(), new Set(), res)) {
      return [];
    }
  }
  return res.reverse();
};

const dfs = (v, vertex, seen, seeing, res) => {
  if (seen.has(v)) {
    return true;
  }
  if (seeing.has(v)) {
    return false;
  }
  seeing.add(v);
  for (let nv of vertex[v]) {
    if (!dfs(nv)) {
      return false;
    }
  }
  seeing.delete(v);
  seen.add(v);
  res.push(v);
  return true;
};
