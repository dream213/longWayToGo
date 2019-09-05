/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯法
 */
// var subsets = function(nums) {
//     if (!Object(nums).length) {
//         return [];
//     }
//     var result = [];
//     nums.sort();
//     backtrack(result, [], nums, 0, nums.length);
//     return result;
// };

// function backtrack(result, tempList, nums, start, n) {
//     result.push(tempList.concat()); //没有长度限制，就直接放 result 中
//     for (var i = start; i < n; i++) {
//         tempList.push(nums[i]); //试探
//         backtrack(result, tempList, nums, i + 1, n); //对结果集的子序列保证顺序，那么i+1
//         //即 tempList可以是[1,2]，不能是[2, 1]
//         tempList.pop(); //不管成功与否，退回上一步
//     }
// }


var subsets = function(nums) {
    var result = [[]];  //  初始为一个二维数组
    for (var num of nums) {   //  依次把每个数都加到每一个元素中，且保留之前的所有元素
      var temp = []
      for (var before of result) {
        temp.push(before.concat(num))
      }
      result = result.concat(temp);
    }
    return result;
}
