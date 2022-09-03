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
var sumOfLeftLeaves = function (root) {
  const traverse = (node, isLeft) => {
    if (node === null) return 0;

    if (node.left === null && node.right === null) {
      return isLeft ? node.val : 0;
    }

    return traverse(node.left, true) + traverse(node.right, false);
  };

  return traverse(root, false);
};
