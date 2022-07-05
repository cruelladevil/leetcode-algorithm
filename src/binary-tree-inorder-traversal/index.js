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
 * @return {number[]}
 */
// Recursive
var inorderTraversalRecursive = function (root) {
  const result = [];

  const traverse = (node) => {
    if (node === null) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return result;
};

// Stack
var inorderTraversalStack = function (root) {
  const result = [];
  const stack = [];
  let node = root;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};
