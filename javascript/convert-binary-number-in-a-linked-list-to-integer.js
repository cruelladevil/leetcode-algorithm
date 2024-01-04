/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let node = head;
  let num = 0;

  while (node !== null) {
    num = (num << 1) | node.val;
    node = node.next;
  }

  return num;
};
