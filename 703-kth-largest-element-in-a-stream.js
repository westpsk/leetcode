/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.sorted = nums.sort((a, b) => a - b);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let start = 0;
  let end = this.sorted.length;
  let sortIndex = start;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (this.sorted[mid] < val) {
      start = mid + 1;
      sortIndex = mid + 1;
    } else if (this.sorted[mid] > val) {
      end = mid - 1;
      sortIndex = mid;
    } else {
      sortIndex = mid;
      break;
    }
  }
  this.sorted.splice(sortIndex, 0, val);
  return this.sorted[this.sorted.length - this.k];
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
