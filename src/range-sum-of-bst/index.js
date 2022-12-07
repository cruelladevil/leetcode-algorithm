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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  const traverse = (node, low, high) => {
    if (node === null) return 0;

    let sum = 0;

    if (node.val > low) {
      sum += traverse(node.left, low, high);
    }
    if (node.val < high) {
      sum += traverse(node.right, low, high);
    }
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    return sum;
  };

  return traverse(root, low, high);
};
