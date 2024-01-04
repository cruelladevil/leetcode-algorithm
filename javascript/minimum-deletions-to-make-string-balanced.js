/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let bCount = 0;
  let deleteCount = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s.charAt(i) === 'b') {
      bCount += 1;
    } else {
      deleteCount = Math.min(deleteCount + 1, bCount);
    }
  }

  return deleteCount;
};
