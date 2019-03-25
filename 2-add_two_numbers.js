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
var addTwoNumbers = function(l1, l2) {
  let val1 = l1.val
  let val2 = l2.val
  let next1 = l1.next
  let next2 = l2.next
  let carry = 0
  const addTwo = (num1, num2) => {
    let addNum = num1 + num2 + carry
    carry = Math.floor(addNum/10)
    return new ListNode(addNum%10)
  }
  
  let addListNode = addTwo(val1, val2)
  let node = addListNode
  while(next1 !== null || next2 !== null || carry !== 0){
    let num1 = next1 ? next1.val : 0
    let num2 = next2 ? next2.val : 0
    let nextListNode = addTwo(num1, num2)
    node.next = nextListNode
    node = nextListNode
    next1 = next1 ? next1.next : null
    next2 = next2 ? next2.next : null
  }
  return addListNode
};

var l1 = [1,2,3]
var l2 = [3,4,8]
addTwoNumbers(l1, l2)