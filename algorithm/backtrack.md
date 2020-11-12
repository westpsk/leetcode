# 回溯问题 DFS

解决一个回溯问题，实际上就是一个决策树的遍历过程。你只需要思考 3 个问题:

1. 路径：也就是已经做出的选择。
2. 选择列表：也就是你当前可以做的选择。
3. 结束条件：也就是到达决策树底层，无法再做选择的条件。

如果你不理解这三个词语的解释，没关系，我们后面会用「全排列」和「N 皇后问题」这两个经典的回溯算法问题来帮你理解这些词语是什么意思，现在你先留着印象。

```py
result = []
def backtrack(路径, 选择列表):
  if 满足结束条件:
    result.add(路径)
    return

  for 选择 in 选择列表:
    做选择
    backtrack(路径, 选择列表)
    撤销选择
```

其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」

一、全排列问题

排列组合的数学题，我们也知道 n 个不重复的数，全排列共有 n! 个。

PS：为了简单清晰起见，我们这次讨论的全排列问题不包含重复的数字。

那么我们当时是怎么穷举全排列的呢？比方说给三个数 [1,2,3]，你肯定不会无规律地乱穷举，一般是这样：

先固定第一位为 1，然后第二位可以是 2，那么第三位只能是 3；然后可以把第二位变成 3，第三位就只能是 2 了；然后就只能变化第一位，变成 2，然后再穷举后两位……

其实这就是回溯算法.

![决策树](https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2Fb847370747577e500942731dfbc3822c9e445e7b.jpg?alt=media)

只要从根遍历这棵树，记录路径上的数字，其实就是所有的全排列。我们不妨把这棵树称为回溯算法的「决策树」。

为啥说这是决策树呢，因为你在每个节点上其实都在做决策。比如说你站在下图的红色节点上：

![决策](https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F2bca8736780b65bbdff30a69fb8e23c7964a1485.jpg?alt=media)

你现在就在做决策，可以选择 1 那条树枝，也可以选择 3 那条树枝。为啥只能在 1 和 3 之中选择呢？因为 2 这个树枝在你身后，这个选择你之前做过了，而全排列是不允许重复使用数字的。
现在可以解答开头的几个名词：[2] 就是「路径」，记录你已经做过的选择；[1,3] 就是「选择列表」，表示你当前可以做出的选择；「结束条件」就是遍历到树的底层，在这里就是选择列表为空的时候。
如果明白了这几个名词，可以把「路径」和「选择」列表作为决策树上每个节点的属性，比如下图列出了几个节点的属性：

![节点的属性](https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2Fb016864ae8dd85f027f4bc983eb8871baa4e68a7.jpg?alt=media)

我们定义的 backtrack 函数其实就像一个指针，在这棵树上游走，同时要正确维护每个节点的属性，每当走到树的底层，其「路径」就是一个全排列。

再进一步，如何遍历一棵树？这个应该不难吧。回忆一下之前「学习数据结构的框架思维」写过，各种搜索问题其实都是树的遍历问题，而多叉树的遍历框架就是这样：

```js
function traverse(TreeNode root) {
  for (TreeNode child : root.childern)
    // 前序遍历需要的操作
    traverse(child);
    // 后序遍历需要的操作
}
```

前序遍历的代码在进入某一个节点之前的那个时间点执行，后序遍历代码在离开某个节点之后的那个时间点执行。
回想我们刚才说的，「路径」和「选择」是每个节点的属性，函数在树上游走要正确维护节点的属性，那么就要在这两个特殊时间点搞点动作：

![tree select](https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F727ed1ecd086bf28e5c0a22ddd20246839cd34ba.jpg?alt=media)

```js
function permute(列表) {
  let result = []
  let 路径 = []
  backtrack(路径, 列表, result)
  return result
}
function backtrack(路径, 选择列表, result){
  if 满足结束条件:
    result.push(路径)
    return result
  for(let 选择 of 选择列表) {
    # 做选择
    if(路径.indexOf(选择)) continue
    路径.push(选择)
    backtrack(路径, 选择列表, result)
    # 撤销选择
    路径.pop(选择)
  }
}
```

我们只要在递归之前做出选择，在递归之后撤销刚才的选择，就能正确得到每个节点的选择列表和路径。

```js
/* 主函数，输入一组不重复的数字，返回它们的全排列
* @params input: [1,2,3]
* @return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
function permute(nums) {
  let track = []
  let res = []
  backtrack(track, nums, res);
  return res
}
function backtrack(track, nums, res) {
  if(track.length === nums.length) {
    res.push(track.slice())
    return res
  }
  for(let num of nums) {
    if(track.indexOf(num) !== -1) continue
    track.push(num)
    backtrack(track, nums, res)
    track.splice(-1)
  }
}
```

## N 皇后问题

给你一个 N × N 的棋盘，让你放置 N 个皇后，使得它们不能互相攻击。

PS：皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。
这个问题本质上跟全排列问题差不多，决策树的每一层表示棋盘上的每一行；每个节点可以做出的选择是，在该行的任意一列放置一个皇后。

```js
function solveNQueens(n) {
  let res = Array.from({length: n}, () => Array(n).fill(0))

}
```
