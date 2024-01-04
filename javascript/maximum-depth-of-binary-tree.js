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
var maxDepth = function (root) {
  const dfs = (node) => {
    if (node === null) return 0;

    const maxLeft = dfs(node.left);
    const maxRight = dfs(node.right);

    return Math.max(maxLeft, maxRight) + 1;
  };

  return dfs(root);
};
