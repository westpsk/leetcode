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
    if (!dfs(nv, vertex, seen, seeing, res)) {
      return false;
    }
  }
  seeing.delete(v);
  seen.add(v);
  res.push(v);
  return true;
};

// bfs
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }
  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) queue.push(i);
  }
  const res = [];
  while (queue.length) {
    const u0 = queue.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) queue.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
};
