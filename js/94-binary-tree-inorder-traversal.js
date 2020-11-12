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

// dp
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

// another

const inorderTraversal = function(root) {
  if(!root) return []
  let inorderList = []
  inorderList.push(...inorderList(root.left))
  inorderList.push(root.val)
  inorderList.push(...inorderList(root.right))
  return inorderList
}

// no dp
// 先把左树全部推到stack里
// 然后pop出一个作为current
// 把current存入inorderList
// 循环执行current的右树
const inorderTraversal = function(root) {
  let inorderList = []
  let stack = []
  let current = root
  while(current || stack.length){
    while(current){
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    inorderList.push(current.val)
    current = current.right
  }
  return inorderList
}