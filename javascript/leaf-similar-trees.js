/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const getLeaves = (node, leaves = []) => {
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {
      leaves.push(node.val);
    }

    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);

    return leaves;
  };

  const isEqualArray = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((leaf, i) => leaf === b[i]);
  };

  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  return isEqualArray(leaves1, leaves2);
};
