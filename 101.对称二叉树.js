/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    function symmetric(leftNode, rightNode) {
        if (leftNode === null && rightNode === null) {
            return true;
        }
        if (leftNode && rightNode && leftNode !== null && rightNode !== null) {
            if (leftNode.val === rightNode.val) {
                return (
                    symmetric(leftNode.left, rightNode.right) &&
                    symmetric(rightNode.left, leftNode.right)
                );
            } else {
                return false;
            }
        }
        return false;
    }
    return symmetric(root.left, root.right);
};
