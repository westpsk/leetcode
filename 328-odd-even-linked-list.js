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
const oddEvenList = function (head) {
  if (!head) return null;
  let odd = head;
  let cur = head.next;
  let even = cur;
  while (cur && cur.next) {
    odd.next = cur.next;
    odd = odd.next;
    cur.next = odd.next;
    cur = cur.next;
  }
  odd.next = even;
  return head;
};
