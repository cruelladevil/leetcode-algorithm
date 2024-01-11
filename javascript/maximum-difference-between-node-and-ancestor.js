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
var maxAncestorDiff = function (root) {
  const dfs = (node, min, max) => {
    if (node === null) {
      return max - min;
    }

    const minValue = Math.min(min, node.val);
    const maxValue = Math.max(max, node.val);

    const leftMaxDiff = dfs(node.left, minValue, maxValue);
    const rightMaxDiff = dfs(node.right, minValue, maxValue);

    return Math.max(leftMaxDiff, rightMaxDiff);
  };

  return dfs(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};
