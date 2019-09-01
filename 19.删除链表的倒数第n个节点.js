/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 * 2019.09.01
 */
var removeNthFromEnd = function(head, n) {
    let slow = fast = head;
    let i = 1;
    while (fast.next) {
        ++i;
        fast = fast.next;
        if (i > n + 1) {
            slow = slow.next;
        }
    }
    if (i === n) {
        return head.next;
    }
    if (i > n) {
        slow.next = slow.next.next;
    }
    return head;
};

