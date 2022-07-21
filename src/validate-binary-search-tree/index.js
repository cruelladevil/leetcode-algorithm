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
// Recursive
var isValidBST = function (root) {
  const validate = (node, minNode, maxNode) => {
    if (node === null) return true;

    if (minNode && node.val <= minNode.val) return false;
    if (maxNode && node.val >= maxNode.val) return false;

    return validate(node.left, minNode, node) && validate(node.right, node, maxNode);
  };

  return validate(root, null, null);
};

// Stack Inorder
var isValidBST = function (root) {
  const stack = [];
  let node = root;
  let pre = null;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();

    if (pre !== null && node.val <= pre.val) return false;

    pre = node;
    node = node.right;
  }

  return true;
};
