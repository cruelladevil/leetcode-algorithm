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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  const queue = [root];
  let minDepth = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (node.left === null && node.right === null) {
        return minDepth + 1;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    minDepth += 1;
  }
};
