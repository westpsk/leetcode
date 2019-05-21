// 二叉查找树 Binary Search Tree
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
    if(newNode.key < node.key){
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
  this.preOrderTraverseNode = function(callback){
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
  this.postOrderTraverseNode = function(callback){
    postOrderTraverseNode(root, callback)
  }

  // 查找最小值
  var minNode = function(node){
    if(node){
      while(node.left !== null && node){
        node = node.left
      }
      return node.key
    }
    return null
  }
  this.min = function(){
    return minNode(root)
  }

  // 查找最大值
  var maxNode = function(node){
    if(node !== null){
      while(node.right){
        node = node.right
      }
      return node.key
    }
  }
  this.max = function(){
    return maxNode(root)
  }

  // 查找具体的值
  var findNode = function(node, key){
    if(node !== null){
      if(node.key === key){
        return true
      }else if(node.key < key){
        return findNode(node.right, key)
      }else{
        return findNode(node.right, key)
      }
    }else{
      return false
    }
  }
  this.find = function(key){
    return findNode(root, key)
  }

  // 找到最小节点
  var findMinNode = function(node){
    if(node){
      while(node && node.left !== null){
        node = node.left
      }
      return node
    }
    return null
  }
  this.minNode = function(node){
    return findMinNode(node)
  }

  // 找到最大节点
  var findMaxNode = function(node){
    if(node){
      while(node && node.right !== null){
        node = node.right
      }
      return node
    }
    return null
  }
  this.maxNode = function(node){
    return findMaxNode(node)
  }

  // 删除节点
  var removeNode = function(node, key){
    if(node === null){
      return null
    }else if(node.key === key){
      if(node.left === null && node.right === null){
        return null
      }else if(node.left === null){
        return node.right
      }else if(node.right === null){
        return node.left
      }else{
        var tempNode = findMinNode(node.right)
        node.key = tempNode.key
        node.right = removeNode(node.right, tempNode.key)
        return node
      }
    }else if(node.key > key){
      node.left = removeNode(node.left, key)
      return node
    }else{
      node.right = removeNode(node.right, key)
      return node
    }
  }
  this.remove = function(key){
    removeNode(root, key)
  }

  // 翻转二叉树
  var invertTree = function(node){
    if(!node) return null
    let temp = node.left
    node.left = node.right
    node.right = temp
    invertTree(node.left)
    invertTree(node.right)
    return node
  }
  this.invert = function(){
    return invertTree(root)
  }
}

// insert test
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
var binaryTree = new BinaryTree()
nodes.forEach(function (key) {
  binaryTree.insert(key)
})
var callback = function (key) {
  console.log(key)
}
// binaryTree.inOrderTraverseNode(callback)    // 左中右
binaryTree.preOrderTraverseNode(callback)   // 中左右
// binaryTree.postOrderTraverseNode(callback)  // 左右中

binaryTree.remove(3)
console.log('remove node 3')
binaryTree.preOrderTraverseNode(callback)   // 中左右

// 红黑树！

// 二叉树的高度