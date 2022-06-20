/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  let row = n - 1;
  let col = 0;
  let negativeCount = 0;

  while (col < m && row >= 0) {
    if (grid[row][col] >= 0) {
      col += 1;
    } else {
      negativeCount += m - col;
      row -= 1;
    }
  }

  return negativeCount;
};
