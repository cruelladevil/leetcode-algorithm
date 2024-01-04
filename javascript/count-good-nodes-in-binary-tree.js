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
var goodNodes = function (root) {
  const getValidNodeCount = function preorderTraverse(node, maxValue) {
    if (node === null) return 0;

    let validCount = 0;

    if (node.val >= maxValue) {
      validCount += 1;
      maxValue = node.val;
    }

    validCount += preorderTraverse(node.left, maxValue);
    validCount += preorderTraverse(node.right, maxValue);

    return validCount;
  };

  return getValidNodeCount(root, -Infinity);
};
