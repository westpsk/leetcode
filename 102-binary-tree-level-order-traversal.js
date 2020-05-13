/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// dfs深度遍历，借助一个level来标志树的层级
const levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  dfs(root, 0, res);
  return res;
};

const dfs = (root, level, res) => {
  if (root) {
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
  }
};

// 使用bfs
const levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    while (len) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  return res;
};
