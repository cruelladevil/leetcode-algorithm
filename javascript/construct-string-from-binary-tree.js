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
 * @return {string}
 */
var tree2str = function (root) {
  const traverse = (node) => {
    if (node === null) return '';

    let string = '';

    string += String(node.val);

    if (node.left !== null || node.right !== null) {
      string += '(' + traverse(node.left) + ')';
    }
    if (node.right !== null) {
      string += '(' + traverse(node.right) + ')';
    }

    return string;
  };

  return traverse(root);
};
