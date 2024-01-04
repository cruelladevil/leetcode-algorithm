/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderIndexMap = new Map();
  let preorderIndex = 0;

  inorder.forEach((value, i) => {
    inorderIndexMap.set(value, i);
  });

  const createTree = (left, right) => {
    if (left > right) return null;

    const value = preorder[preorderIndex];
    const node = new TreeNode(value);

    preorderIndex += 1;
    node.left = createTree(left, inorderIndexMap.get(value) - 1);
    node.right = createTree(inorderIndexMap.get(value) + 1, right);

    return node;
  };

  return createTree(0, inorder.length - 1);
};
