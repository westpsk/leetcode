# 链表的设计

Node类用来表示节点，LinkedList类提供插入节点/删除节点等一些操作

## Node类

```javascript
function Node(element) {
  this.element = element; // 保存节点上的数据
  this.next = null;       // 下一个节点的链接
}
```

## LinkedList类

```javascript
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPre = findPre;
  this.display = display;
}
```

### find 查找给定节点

```javascript
function find(item) {
  var currNode = this.head;
  while(currNode.element !== item){
    currNode = currNode.next;
  }
  return currNode;
}
```

### insert 指定位置插入节点

```javascript
function insert(item, newElement){
  var newNode = new Node(newElement)
  var currNode = this.find(item);
  insert.next = currNode.next;
  currNode.next = newNode;
}
```

### display 显示链表

```javascript
function display() {
  var currNode = this.head;
  while(currNode !== null){
    console.log(currNode.element);
    currNode = currNode.next;
  }
}

```
