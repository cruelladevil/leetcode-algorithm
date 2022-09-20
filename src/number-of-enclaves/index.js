/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const LAND = 1;
  const LAND_CHECKED = -1;
  const m = grid.length;
  const n = grid[0].length;

  const markLand = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;
    if (isOutOfGrid || grid[row][col] !== LAND) return;

    grid[row][col] = LAND_CHECKED;

    markLand(row - 1, col);
    markLand(row + 1, col);
    markLand(row, col - 1);
    markLand(row, col + 1);
  };

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const isBoundary = row === 0 || col === 0 || row === m - 1 || col === n - 1;
      if (isBoundary && grid[row][col] === LAND) {
        markLand(row, col);
      }
    }
  }

  let landArea = 0;

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (grid[row][col] === LAND) {
        landArea += 1;
      }
    }
  }

  return landArea;
};
