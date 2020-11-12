/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.list = [];
  this.min = [Infinity];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.list.push(x);
  this.min.push(Math.min(x, this.min[this.min.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.list.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.list.length ? this.list[this.list.length - 1] : "";
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
