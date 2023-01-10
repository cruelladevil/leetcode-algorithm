/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null || q === null) return p === q;

  const isSameValue = p.val === q.val;
  const isSameLeft = isSameTree(p.left, q.left);
  const isSameRight = isSameTree(p.right, q.right);

  return isSameValue && isSameLeft && isSameRight;
};
