function BinaryTree(){
  // 创建一个节点
  var Node = function(key){
    this.key = key
    this.left = null
    this.right = null
  }

  // 创建一个根结点
  var root = null
  var insertNode = function(node, newNode){
    if(newNode.left < node.key){
      if(node.left === null){
        node.left = newNode
      }else{
        insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right, newNode)
      }
    }
  }
  // 创建一个函数来插入节点
  this.insert = function(key){
    var newNode = new Node(key)
    if(root === null){
      root = newNode
    }else{
      insertNode(root, newNode)
    }
  }

  // 中序遍历 左中右
  var inOrderTraverseNode = function(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  this.inOrderTraverseNode = function(callback){
    inOrderTraverseNode(root, callback)
  }

  // 前序遍历 中左右
  var preOrderTraverseNode = function(node, callback){
    if(node !== null){
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  this.preOrderTraverseNode = function(node, callback){
    preOrderTraverseNode(root, callback)
  }

  // 后序遍历 左右中
  var postOrderTraverseNode = function(node, callback){
    if(node !== null){
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  this.postOrderTraverseNode = function(node, callback){
    postOrderTraverseNode(root, callback)
  }
}

// insert test
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
var binaryTree = new BinaryTree()
nodes.forEach(function (key) {
  binaryTree.insert(key)
})

// 查找最小值

// 查找最大值

// 查找具体的值

// 删除节点

// 删除中间节点

// 红黑树！