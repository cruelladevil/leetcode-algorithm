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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const traverse = (left, right) => {
    if (left === null || right === null) return left === right;

    if (left.val !== right.val) return false;

    return traverse(left.left, right.right) && traverse(left.right, right.left);
  };

  return traverse(root.left, root.right);
};
