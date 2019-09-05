/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 * 9.1;
 */
// var lengthOfLongestSubstring = function(s) {
//     /**
//      * 例子: abcababcb
//      * map和start作用,快速求出当前遍历节点距离起始位连续无重复最远距离
//      * map: 记录上一次出现的位置
//      * start: 遍历节点连续的最远子串起始位置
//      * start更新机制: 上一次出现位置在该子串中, 挪动头指针到上次位置+1
//      * 不出现,不变
//      * 该程序求出来以后,start不一定在最长连续子串中.
//      */
//     let theSecondLastPositionMap = {};
//     let strStart = 0;
//     return s.split('').reduce(function(max, item, index) {
//         strStart = theSecondLastPositionMap[item] >= strStart ? theSecondLastPositionMap[item] + 1 : strStart;
//         theSecondLastPositionMap[item] = index;
//         return Math.max(max, index - strStart + 1);
//     }, 0)
// };

function lengthOfLongestSubstring(str) {
    let max = -1;
    for (let i = 0; i < str.length; i++) {
        let j = i + 1;
        const start = str.charAt(i);
        let map = { [start]: 1 };
        while (j < str.length && !map[str.charAt(j)]) {
            map[str.charAt(j)] = 1;
            j++;
        }
        if (max < j - i) {
            max = j - i;
        }
    }
    return max;
}

