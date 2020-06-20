/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const rotateRight = function (head, k) {
  if (!head || !k) return head;
  let current = head;
  let length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }

  current.next = head;
  let k1 = length - (k % length);
  while (k1--) {
    current = current.next;
  }

  head = current.next;
  current.next = null;

  return head;
};
