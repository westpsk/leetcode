import ListNode from "./Node";

export default class LLink {
  constructor() {
    this.head = new ListNode();
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) return null;

    let deleteNode = null;
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    let currNode = this.head;
    if (currNode !== null) {
      while (currNode.next) {
        if (currNode.next.value === value) {
          deleteNode = currNode.next;
          currNode.next = currNode.next.next;
        } else {
          currNode = currNode.next;
        }
      }
    }
    // 检查尾节点
    if (this.tail.value === value) {
      this.tail = currNode;
    }
    return deleteNode;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {}

  display() {
    var currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
}
