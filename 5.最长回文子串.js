/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    /**
     * 例子: babb
     * i是中点位置
     * j是半径
     * i-j就是左边界
     * i+j(奇数回文串) i+j+1(偶数回文串,此时i是左侧对称点)
     */
    if (s.length <= 1) {
        return s;
    }
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        // 奇数回文串
        for (let j = 0; i - j >= 0 && i + j < s.length; j++) {
            if (s.charAt(i - j) !== s.charAt(i + j)) break;
            if (2 * j + 1 > longest.length) longest = s.substring(i - j, i + j + 1);
        }
        // 偶数回文串
        for (let j = 0; i - j >= 0 && i + j + 1 < s.length; j++) {
            if (s.charAt(i - j) !== s.charAt(i + j + 1)) break;
            if (2 * j + 2 > longest.length) longest = s.substring(i - j, i + j + 2);
        }
    }
    return longest;
}