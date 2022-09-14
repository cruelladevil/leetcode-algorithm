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
var minCameraCover = function (root) {
  const UNMONITORED = 'UNMONITORED';
  const MONITORED = 'MONITORED';
  const CAMERA = 'CAMERA';

  let cameraCount = 0;

  const dfs = (node) => {
    if (node === null) return MONITORED;

    const leftState = dfs(node.left);
    const rightState = dfs(node.right);

    if (leftState === UNMONITORED || rightState === UNMONITORED) {
      cameraCount += 1;
      return CAMERA;
    }

    if (leftState === CAMERA || rightState === CAMERA) {
      return MONITORED;
    }

    return UNMONITORED;
  };

  const rootState = dfs(root);
  if (rootState === UNMONITORED) cameraCount += 1;

  return cameraCount;
};
