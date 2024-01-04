/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const ISLAND = 0;
  const ISLAND_CHECKED = -1;
  const m = grid.length;
  const n = grid[0].length;

  const markIsland = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;
    if (isOutOfGrid || grid[row][col] !== ISLAND) return;

    grid[row][col] = ISLAND_CHECKED;

    markIsland(row - 1, col);
    markIsland(row + 1, col);
    markIsland(row, col - 1);
    markIsland(row, col + 1);
  };

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const isBoundary = row === 0 || col === 0 || row === m - 1 || col === n - 1;
      if (isBoundary && grid[row][col] === ISLAND) {
        markIsland(row, col);
      }
    }
  }

  let closedIslandCount = 0;

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (grid[row][col] === ISLAND) {
        markIsland(row, col);
        closedIslandCount += 1;
      }
    }
  }

  return closedIslandCount;
};
