/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrderBottom = function (root) {
//     let result_stack = []; // 最终结果
//     if (root === null) return result_stack;
//     let tag = '#' // 遍历完一层之后的标记符号
//     let queue = ['#', root]; // 用于层次遍历的队列
//     let tmp = []; // 每一层的遍历临时结果

//     while (queue.length > 0) {
//         // 取队头
//         let a = queue.pop();
//         if (a === tag) { // 遍历到标记符号,则一层遍历结束,将临时结果tmp压入result_stack结果栈中
//             if (tmp.length<=0) break;
//             result_stack.unshift(tmp);
//             tmp = []; // 清空临时结果
//             queue.unshift(tag); // 队列尾部加入标记符号,作为下一层节点入队结束的标记
//             //if (queue[queue.length - 1] === tag) break; // 连续两个标记符号出队,说明树的层次遍历结束
//         } else if (a === null) { // 空儿子节点,直接跳过
//             continue;
//         } else {
//             // 当前节点保存到临时结果tmp中，然后子节点入队
//             tmp.push(a.val);
//             queue.unshift(a.left);
//             queue.unshift(a.right);
//         }
//     }

//     return result_stack;
// };

var levelOrderBottom = function (root) {
    let result_stack = []; // 最终结果
    let tag = '#' // 遍历完一层之后的标记符号
    let queue = ['#', root[0]]; // 用于层次遍历的队列
    let tmp = []; // 每一层的遍历临时结果
    let vk = {}; // 用于找到某个元素对应的索引
    for (let i = 0; i < root.length; i++) {
        vk[root[i]] = i;
    }

    while (queue.length > 0) {
        // 取队头
        let a = queue.pop();
        if (a === tag) { // 遍历到标记符号,则一层遍历结束,将临时结果tmp压入result_stack结果栈中
            result_stack.unshift(tmp);
            tmp = []; // 清空临时结果
            queue.unshift(tag); // 队列尾部加入标记符号,作为下一层节点入队结束的标记
            if (queue[queue.length - 1] === tag) break; // 连续两个标记符号出队,说明树的层次遍历结束
        } else if (a === null) { // 空儿子节点,直接跳过
            continue;
        } else {
            // 当前节点保存到临时结果tmp中，然后子节点入队
            tmp.push(a);
            let k = vk[a];
            let l = root[2 * k + 1],
                r = root[2 * k + 2];
            if (l !== undefined) queue.unshift(l);
            if (r !== undefined) queue.unshift(r);
        }
    }

    return result_stack;
};