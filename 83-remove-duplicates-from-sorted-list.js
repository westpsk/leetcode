/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { default: ListNode } = require("./LinkedList/Node");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let cur = head
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};

const deleteDuplicates = function (head) {
  let map = new Map()
  let res = head
  let pre = new ListNode()
  while (head) {
    if (map.has(head.val)) {
      pre.next = head.next
    } else {
      map.set(head.val)
      pre = head
    }
    head = head.next
  }
  return res
} 