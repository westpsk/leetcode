/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHeap = nums.slice(0, k).sort((a, b) => a - b);
  this.k = k;
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > this.minHeap[0]) {
      this.minHeap.shift(0);
      this.minHeap.push(nums[i]);
      this.minHeap.sort((a, b) => a - b);
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minHeap.length < this.k) {
    this.minHeap.push(val);
    this.minHeap.sort((a, b) => a - b);
  } else {
    if (val > this.minHeap[0]) {
      this.minHeap.shift(0);
      this.minHeap.push(val);
      this.minHeap.sort((a, b) => a - b);
    }
  }
  return this.minHeap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var obj = new KthLargest(7, [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1]);
obj.add(3);
obj.add(5);
obj.add(10);
obj.add(9);
console.log(obj.minHeap);
