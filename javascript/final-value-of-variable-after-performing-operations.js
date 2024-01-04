/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations.reduce((num, cur) => {
    if (cur.includes('++')) return num + 1;
    if (cur.includes('--')) return num - 1;
    return num;
  }, 0);
};
