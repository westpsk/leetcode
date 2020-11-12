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
const isValidBST = function(root) {
  return isValid(root, null, null)
};

const isValid = (node, min, max) => {
  if(node === null) return true
  if(min !== null && node.val <= min) return false
  if(max !== null && node.val >= max) return false
  return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
}