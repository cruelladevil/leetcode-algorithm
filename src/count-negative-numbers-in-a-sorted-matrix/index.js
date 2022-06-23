/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let row = m - 1;
  let col = 0;
  let negativeCount = 0;

  while (col < n && row >= 0) {
    if (grid[row][col] >= 0) {
      col += 1;
    } else {
      negativeCount += n - col;
      row -= 1;
    }
  }

  return negativeCount;
};
