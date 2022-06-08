/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const ISLAND = 1;
  const ISLAND_CHECKED = -1;
  let maxIslandArea = 0;

  const getIslandArea = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;

    if (isOutOfGrid || grid[row][col] !== ISLAND) return 0;

    grid[row][col] = ISLAND_CHECKED;

    const upArea = getIslandArea(row - 1, col);
    const downArea = getIslandArea(row + 1, col);
    const leftArea = getIslandArea(row, col - 1);
    const rightArea = getIslandArea(row, col + 1);

    return 1 + upArea + downArea + leftArea + rightArea;
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === ISLAND) maxIslandArea = Math.max(maxIslandArea, getIslandArea(i, j));
    }
  }

  return maxIslandArea;
};
