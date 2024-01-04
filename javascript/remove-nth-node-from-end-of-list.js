/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const DUMMY_VALUE = -1;
  const dummy = new ListNode(DUMMY_VALUE, head);
  let fast = dummy;
  let slow = dummy;

  for (let i = 1; i <= n; i += 1) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
