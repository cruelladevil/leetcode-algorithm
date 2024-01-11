/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let minute = 0;

  const traverse = (node, start) => {
    if (node === null) {
      return 0;
    }

    const leftDepth = traverse(node.left, start);
    const rightDepth = traverse(node.right, start);

    if (node.val === start) {
      minute = Math.max(leftDepth, rightDepth);
      return -1;
    } else if (leftDepth >= 0 && rightDepth >= 0) {
      return Math.max(leftDepth, rightDepth) + 1;
    } else {
      minute = Math.max(minute, Math.abs(leftDepth - rightDepth));
      return Math.min(leftDepth, rightDepth) - 1;
    }
  };

  traverse(root, start);

  return minute;
};
