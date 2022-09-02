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
  const levelSums = [];

  const traverse = (node, level) => {
    if (node === null) return;

    if (!levelSums[level]) {
      levelSums[level] = { count: 0, sum: 0 };
    }

    levelSums[level].count += 1;
    levelSums[level].sum += node.val;

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  return levelSums.map(({ sum, count }) => sum / count);
};
