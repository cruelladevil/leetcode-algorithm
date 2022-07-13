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
 * @return {number[][]}
 */
// BFS
var levelOrder = function (root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const queueLength = queue.length;
    const level = [];

    for (let i = 0; i < queueLength; i += 1) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
};

// DFS
var levelOrder = function (root) {
  const result = [];

  const traverse = (node, level) => {
    if (node === null) return;

    if (!result[level]) result[level] = [];
    result[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  return result;
};
