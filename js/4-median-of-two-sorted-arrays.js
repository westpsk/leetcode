/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let list = [...nums1, ...nums2];
  list.sort((a, b) => a - b);
  let len = list.length;
  if (len % 2) {
    return list[Math.floor(len / 2)];
  } else {
    return (list[len / 2 - 1] + list[len / 2]) / 2;
  }
};

// 上面时间复杂度有问题
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  let len1 = nums1.length;
  let len2 = nums2.length;
  let half = Math.floor((len1 + len2 + 1) / 2);
  let min = 0;
  let max = len1;
  while (max >= min) {
    const i = Math.floor((max + min) / 2);
    const j = half - i;
    if (i > min && nums1[i - 1] > nums2[j]) {
      // i 需要减小
      max = i - 1;
    } else if (i < max && nums1[i] < nums2[j - 1]) {
      // i 需要增大
      min = i + 1;
    } else {
      let left, right;
      if (i === 0) {
        left = nums2[j - 1];
      } else if (j === 0) {
        left = nums1[i - 1];
      } else {
        left = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      if (i === len1) {
        right = nums2[j];
      } else if (j === len2) {
        right = nums1[i];
      } else {
        right = Math.min(nums1[i], nums2[j]);
      }
      return (len1 + len2) % 2 ? left : (left + right) / 2;
    }
  }
};
