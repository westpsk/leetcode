/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  return fn(0, preorder.length - 1, preorder, 0, inorder.length - 1, inorder)
};

const fn = function(s1, e1, preorder, s2, e2, inorder){
  if(s1 > e1 || s2 > e2) return null
  let value = preorder[s1]
  let node = new TreeNode(value)
  let point = inorder.indexOf(value)
  let left = point - s2
  let right = e2 - point
  node.left = fn(s1+1, s1+left, preorder, s2, s2+left-1, inorder)
  node.right = fn(e1-right+1, e1, preorder, e2-right+1, e2, inorder)
  return node
}

