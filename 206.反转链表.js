/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
    let temp = null;
    if (head === null) {
        return head;
    }
    while (head.next) {
        let nextNode = head.next;
        head.next = temp;
        temp = head;
        head = nextNode;
    }
    head.next = temp;
    return head;
};
// 递归
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var new_head = reverseList(head.next); // 反转后的头节点
    head.next.next = head; // 将反转后的链表的尾节点与当前节点相连
    head.next = null;
    return new_head;
};

