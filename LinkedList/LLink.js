export class LLink {
  constructor(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPre = findPre;
    this.display = display;
  }

  find(item) {
    var currNode = this.head;
    while(currNode.element !== item){
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(item, newElement){
    var newNode = new Node(newElement)
    var currNode = this.find(item);
    insert.next = currNode.next;
    currNode.next = newNode;
  }

  display() {
    var currNode = this.head;
    while(currNode !== null){
      console.log(currNode.element);
      currNode = currNode.next;
    }
  }
}