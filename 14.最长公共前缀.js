/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 * 9.1;
 */
// var longestCommonPrefix = function(strs) {
//     // 在没有初始值的空数组上调用reduce将报错
//     if(strs.length === 0) return '';
//     // reduce不指定初始值,commonStr 为第一个元素,item第二个
//     return strs.reduce((commonStr, item) => {
//         let i = 0;
//         while(commonStr[i] && item[i] && commonStr[i] === item[i]) i++;
//         return commonStr.slice(0,i);
//     })
// };

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    return strs.reduce((comStr, item, index) => {
        let i = 0;
        // console.log("comStr", comStr);
        while (
            i < comStr.length &&
            i < item.length &&
            comStr.charAt(i) === item.charAt(i) 
        ) i++;
       return comStr.slice(0, i);
    });
};

longestCommonPrefix(["flower","flow","flight"]);
