/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0
  var helper = (node) => {
    if(!node) return
    helper(node.right)
    node.val += sum
    sum = node.val
    helper(node.left)
  }
  helper(root)
  return root
};

