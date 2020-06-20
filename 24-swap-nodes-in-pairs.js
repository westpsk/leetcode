/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let current = dummy;
  while (current.next && current.next.next) {
    let first = current.next;
    let sencond = current.next.next;
    current.next = sencond;
    current.next.next = first;
    current = current.next.next;
  }
  return dummy.next;
};
