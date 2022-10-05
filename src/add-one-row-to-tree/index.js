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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  let dummy = new TreeNode(val, root, null);

  const dfs = (node, d = 0) => {
    if (node === null) return;

    if (d === depth - 1) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
    }

    dfs(node.left, d + 1);
    dfs(node.right, d + 1);
  };

  dfs(dummy);

  return dummy.left;
};
