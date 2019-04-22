/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  if(!root) return []
  let res = []
  let cf = (node) => {
    let left = node.left
    let right = node.right
    if(left){
      node.left = cf(left)
    }
    res.push(node.val)
    if(right){
      node.right = cf(right) 
    }
  }
  cf(root)
  return res
}