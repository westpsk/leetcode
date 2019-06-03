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
  stack.push(head.val)
  head = head.next
  while(head){
    if(stack[stack.length-1] === head.val){
      stack.pop()
    }else{
      stack.push(head.val)
    }
    head = head.next
  }
  return stack.length > 0 ? false : true
}