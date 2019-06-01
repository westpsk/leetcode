/** 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// two line
const reverseList = function (head, pre = null) {
  while (head) [head.next, head, pre] = [pre, head.next, head]
  return pre
};

// to easy understand
const reverseList = function (head) {
  let cur = null
  while(head){
    let temp = head.next
    head.next = cur
    cur = head
    head = temp
  }
  return cur
}