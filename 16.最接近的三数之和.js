/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 暴力解法需要三层循环
 * 此解法O(n^2)
 */
var threeSumClosest = function(nums, target) {
    nums.sort((item1, item2) => item1 - item2);
    let bestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length-1;
        while(start < end) {
             let sum = nums[i] + nums[start] + nums[end];
             if(Math.abs(target-bestSum) > Math.abs(target-sum)) {
                bestSum = sum;
             }
             if(target === sum) {
                return bestSum;
             }else if(target > sum){
                start++;
             }else {
                 end--;
             }
        }
    }
    return bestSum;
};
