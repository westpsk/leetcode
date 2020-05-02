/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};

// two pointer
const mergeTwoLists = function (l1, l2) {
  let head = new ListNode(null),
    pre = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      pre.next = l2;
      l2 = l2.next;
    } else {
      pre.next = l1;
      l1 = l1.next;
    }
    pre = pre.next;
  }
  pre.next = l1 ? l1 : l2;
  return head.next;
};
