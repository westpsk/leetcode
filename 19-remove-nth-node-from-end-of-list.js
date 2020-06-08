/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let length = 0;
  let first = head;
  while (first) {
    length++;
    first = first.next;
  }
  first = dummy;
  while (length - n) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
