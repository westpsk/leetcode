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

const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let first = dummy;
  let sencond = dummy;
  // for (let i = 1; i < n + 1; i++) {
  //   first = first.next;
  // }
  while (n > 0) {
    first = first.next;
    n--;
  }
  while (first && first.next) {
    first = first.next;
    sencond = sencond.next;
  }
  sencond.next = sencond.next.next;
  return dummy.next;
};
