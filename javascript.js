/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 
const merge = function(nums1, m, nums2, n) {

    for(let index = 0; index < n; index++) {
        nums1[index+ m] = nums2[index]
    }

    nums1.sort((n,m) => n-m )
};