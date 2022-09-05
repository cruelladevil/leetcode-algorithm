/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;
    const levelNodes = [];

    for (let i = 0; i < levelLength; i += 1) {
      const node = queue.shift();
      levelNodes.push(node.val);

      node.children.forEach((child) => queue.push(child));
    }

    result.push(levelNodes);
  }

  return result;
};
