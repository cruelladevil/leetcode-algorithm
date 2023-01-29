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
  const dummy = new TreeNode(val, root, null);

  const dfs = (node, destination, depth = 1) => {
    if (node === null) return;

    if (depth === destination) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
    }

    dfs(node.left, destination, depth + 1);
    dfs(node.right, destination, depth + 1);
  };

  dfs(dummy, depth);

  return dummy.left;
};
