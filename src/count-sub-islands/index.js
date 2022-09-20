/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const LAND = 1;
  const LAND_CHECKED = -1;
  const m = grid2.length;
  const n = grid2[0].length;

  const checkSubIsland = (row, col) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;
    if (isOutOfGrid || grid2[row][col] !== LAND) return true;

    grid2[row][col] = LAND_CHECKED;

    const up = checkSubIsland(row - 1, col);
    const down = checkSubIsland(row + 1, col);
    const left = checkSubIsland(row, col - 1);
    const right = checkSubIsland(row, col + 1);

    return up && down && left && right && grid1[row][col] === LAND;
  };

  let subIslandCount = 0;

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (grid2[row][col] === LAND) {
        if (checkSubIsland(row, col)) subIslandCount += 1;
      }
    }
  }

  return subIslandCount;
};
