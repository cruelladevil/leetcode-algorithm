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
var averageOfLevels = function (root) {
  const count = [];
  const sum = [];

  const traverse = (node, level) => {
    if (node === null) return;

    if (!count[level]) {
      count[level] = 0;
      sum[level] = 0;
    }

    count[level] += 1;
    sum[level] += node.val;

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  for (let level = 0; level < sum.length; level += 1) {
    sum[level] /= count[level];
  }

  return sum;
};
