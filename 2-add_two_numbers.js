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
  var newList = new ListNode(0)
  var currList = newList
  var carry = 0
  var twoSum = 0
  newList.next = currList
  while(l1 || l2 || carry !== 0){
    var num1 = l1 ? l1.val : 0
    var num2 = l2 ? l2.val : 0
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    twoSum = carry + num1 + num2
    carry = twoSum >= 10 ? 1 : 0
    currList.next = new ListNode(twoSum%10)
    currList = currList.next
  }
  return newList.next
};

var l1 = [1,2,3]
var l2 = [3,4,8]
addTwoNumbers(l1, l2)