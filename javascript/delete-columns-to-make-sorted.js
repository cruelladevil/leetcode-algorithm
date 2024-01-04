/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const m = strs.length;
  const n = strs[0].length;

  const isColSorted = (strs, col) => {
    for (let row = 0; row < m - 1; row += 1) {
      const curr = strs[row].charAt(col);
      const next = strs[row + 1].charAt(col);

      if (curr.localeCompare(next) > 0) return false;
    }

    return true;
  };

  let deleteCount = 0;

  for (let col = 0; col < n; col += 1) {
    if (!isColSorted(strs, col)) deleteCount += 1;
  }

  return deleteCount;
};
