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
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const traverse = (node, val) => {
    if (node === null) return new TreeNode(val);

    if (node.val > val) {
      node.left = traverse(node.left, val);
    } else {
      node.right = traverse(node.right, val);
    }

    return node;
  };

  return traverse(root, val);
};
