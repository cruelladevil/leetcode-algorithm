/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;
  let sum = 0;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    curr.next = new ListNode(sum);
  }

  return dummy.next;
};
