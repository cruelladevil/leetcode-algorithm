/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const ISLAND = 1;
  const ISLAND_CHECKED = -1;
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;

  const getIslandArea = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;

    if (isOutOfGrid || grid[row][col] !== ISLAND) return 0;

    grid[row][col] = ISLAND_CHECKED;

    const upArea = getIslandArea(row - 1, col);
    const downArea = getIslandArea(row + 1, col);
    const leftArea = getIslandArea(row, col - 1);
    const rightArea = getIslandArea(row, col + 1);

    return 1 + upArea + downArea + leftArea + rightArea;
  };

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (grid[r][c] === ISLAND) maxArea = Math.max(maxArea, getIslandArea(r, c));
    }
  }

  return maxArea;
};
