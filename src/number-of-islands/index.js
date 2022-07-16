/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const ISLAND = '1';
  const ISLAND_CHECKED = '-1';
  const m = grid.length;
  const n = grid[0].length;
  let islandCount = 0;

  const markIslandChecked = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;

    if (isOutOfGrid || grid[row][col] !== ISLAND) return;

    grid[row][col] = ISLAND_CHECKED;

    markIslandChecked(row - 1, col);
    markIslandChecked(row + 1, col);
    markIslandChecked(row, col - 1);
    markIslandChecked(row, col + 1);
  };

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (grid[row][col] === ISLAND) {
        markIslandChecked(row, col);
        islandCount += 1;
      }
    }
  }

  return islandCount;
};
