/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
  let largerHead = new ListNode(null)
  let smallerHead = new ListNode(null)
  let larger = largerHead
  let smaller = smallerHead
  while(head !== null){
    if(head.val < x){
      smaller.next = head
      smaller = smaller.next
    }else{
      larger.next = head
      larger = larger.next
    }
    head = head.next
  }
  larger.next = null
  smaller.next = largerHead.next
  return smallerHead.next
}