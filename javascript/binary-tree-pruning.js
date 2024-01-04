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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const traverse = (node) => {
    if (node === null) return null;

    node.left = traverse(node.left);
    node.right = traverse(node.right);

    if (node.left === null && node.right === null && node.val === 0) return null;

    return node;
  };

  return traverse(root);
};
