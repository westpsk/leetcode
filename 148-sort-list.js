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
const sortList = function(head) {
  if(head === null || head.next === null) return head
  let slow = head,
      fast = head.next
  while(fast && fast.next){
    slow = head.next
    fast = fast.next.next
  }
  const mid = slow.next
  slow.next = null
  const l1 = sortList(head)
  const l2 = sortList(mid)
  return merge(l1, l2)
}

const merge = function(l1, l2){
  let node = new ListNode(0)
  let pointer = node
  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }
  if(l1 !== null) pointer.next = l1
  if(l2 !== null) pointer.next = l2
  return node.next
}