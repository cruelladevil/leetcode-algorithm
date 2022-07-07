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
// Recursive
var searchBST = function (root, val) {
  const dfs = (node, target) => {
    if (node === null) return null;

    if (node.val === target) return node;

    if (node.val > target) {
      node = dfs(node.left, target);
    } else {
      node = dfs(node.right, target);
    }

    return node;
  };

  return dfs(root, val);
};

// Iterative
var searchBST = function (root, val) {
  let node = root;

  while (node !== null) {
    if (node.val === val) return node;

    if (node.val > val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return node;
};
