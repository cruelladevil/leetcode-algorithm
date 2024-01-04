/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const rowBound = Math.floor((n + 1) / 2);
  const colBound = Math.floor(n / 2);

  for (let row = 0; row < rowBound; row += 1) {
    for (let col = 0; col < colBound; col += 1) {
      const temp = matrix[row][col];

      matrix[row][col] = matrix[n - col - 1][row];
      matrix[n - col - 1][row] = matrix[n - row - 1][n - col - 1];
      matrix[n - row - 1][n - col - 1] = matrix[col][n - row - 1];
      matrix[col][n - row - 1] = temp;
    }
  }
};
