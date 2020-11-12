/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  if(root === null || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // if(left === null) {
  //   return right
  // } else if(right === null) {
  //   return left
  // } else {
  //   return root
  // }
  return left === null ? right : right === null ? left : root  
};

// 利用二叉搜索树的特点
const lowestCommonAncestor = function(root, p, q) {
  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q) 
  }else if(root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q) 
  } else {
    return root
  }
}

const lowestCommonAncestor = function(root, p, q) {
  while(root) {
    if(root.val > p.val && root.val > q.val) {
      root = root.left
    }else if(root.val < p.val && root.val < q.val) {
      root = root.right
    }else {
      return root
    }
  }
}