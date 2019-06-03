/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  if(!head) return true
  let stack = []
  let temp = head
  while(head){
    stack.push(head.val)
    head = head.next
  }
  while(temp){
    if(temp.val !== stack.pop()){
      return false
    }
    temp = temp.next
  }
  return true
}