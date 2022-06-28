/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i += 1) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let j = 0; j < n; j += 1) {
      rowSet.add(matrix[i][j]);
      colSet.add(matrix[j][i]);
    }

    if (rowSet.size !== n || colSet.size !== n) return false;
  }

  return true;
};
