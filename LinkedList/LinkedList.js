import Node from "./Node";

export default class LLink {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    var currNode = this.head;
    console.log("currNode element => ", currNode.element);
    console.log("item => ", item);
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    console.log("newNode => ", newNode);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete() {}

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
      console.log(currNode.element);
      currNode = currNode.next;
    }
  }
}
