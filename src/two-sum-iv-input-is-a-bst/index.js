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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const leftStack = new TreeStack(true);
  const rightStack = new TreeStack(false);

  leftStack.push(root);
  rightStack.push(root);

  while (leftStack.peek() !== rightStack.peek()) {
    const sum = leftStack.peek().val + rightStack.peek().val;

    if (sum === k) return true;

    if (sum < k) {
      leftStack.next();
    } else {
      rightStack.next();
    }
  }

  return false;
};

class TreeStack {
  constructor(isLeftTree) {
    this.stack = [];
    this.isLeftTree = isLeftTree;
  }

  push(node) {
    while (node !== null) {
      this.stack.push(node);

      if (this.isLeftTree) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }

  next() {
    const node = this.stack.pop();

    if (this.isLeftTree) {
      this.push(node.right);
    } else {
      this.push(node.left);
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
