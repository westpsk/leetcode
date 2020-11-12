/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// bfs
const isSymmetric = function (root) {
  if (!root) return true;
  let leftQueue = [root.left];
  let rightQueue = [root.right];
  while (leftQueue.length && rightQueue.length) {
    let left = leftQueue.pop();
    let right = rightQueue.pop();
    if (!left && !right) continue;
    if ((left && !right) || (!left && right)) return false;
    if (left.val !== right.val) return false;
    leftQueue.push(left.left, left.right);
    rightQueue.push(right.right, right.left);
  }
  if (leftQueue.length || rightQueue.length) return false;
  return true;
};

// 递归
const isSymmetric = function (root) {
  if (!root) return true;
  return check(root.left, root.right);
};
const check = function (a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val == b.val && check(a.left, b.right) && check(a.right, b.left)) {
    return true;
  }
  return false;
};
