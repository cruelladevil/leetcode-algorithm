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
// dfs
var averageOfLevels = function (root) {
  const levelSums = [];

  const dfs = (node, level = 0) => {
    if (node === null) return;

    levelSums[level] ??= { sum: 0, count: 0 };

    levelSums[level].sum += node.val;
    levelSums[level].count += 1;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root);

  return levelSums.map(({ sum, count }) => sum / count);
};

// bfs
var averageOfLevels = function (root) {
  const everages = [];
  const queue = new Queue([root]);

  while (!queue.isEmpty()) {
    const size = queue.size();
    let sum = 0;

    for (let i = 0; i < size; i += 1) {
      const node = queue.dequeue();
      sum += node.val;

      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }

    everages.push(sum / size);
  }

  return everages;
};
