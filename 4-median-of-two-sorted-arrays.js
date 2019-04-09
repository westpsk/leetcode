/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let list = [...nums1, ...nums2]
  list.sort((a,b) => a-b)
  let len = list.length
  if(len%2){
    return list[Math.floor(len/2)]
  }else{
    return (list[len/2 - 1] + list[len/2])/2
  }
}