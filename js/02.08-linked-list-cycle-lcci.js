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
const detectCycle = function (head) {
  while (head) {
    if (head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
};

// two pointer
const detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let start = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== start) {
        slow = slow.next;
        start = start.next;
      }
      return slow;
    }
  }
  return null;
};
