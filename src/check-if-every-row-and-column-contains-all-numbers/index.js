/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;

  for (let row = 0; row < n; row += 1) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let col = 0; col < n; col += 1) {
      rowSet.add(matrix[row][col]);
      colSet.add(matrix[col][row]);
    }

    if (rowSet.size !== n || colSet.size !== n) return false;
  }

  return true;
};
