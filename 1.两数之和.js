/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 遍历一遍数组,如果target-a[i️]在数组里面存在,就说明找到了
 * 怎么更快判断在不在呐
 * 建立一个exist的map,将数组value和key交换位置存储
 */
var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            // ret = [exist[target - nums[i]], i + 1];
            ret.push(exist[target - nums[i]]);
            ret.push(i);
        }
        
        exist[nums[i]] = i;
    }
    
    return ret
};

