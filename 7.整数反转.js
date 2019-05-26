/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0) {
    const result = Number(((x+'').substr(1)+'').split('').reverse().join(''), 10);
        return (result < 0 || -result < (-Math.pow(2,31))) ? 0 : -result;
    }
    const result = Number((x+'').split('').reverse().join(''), 10);
    return (result < 0 || result> (Math.pow(2,31) -1)) ? 0 : result;
};

