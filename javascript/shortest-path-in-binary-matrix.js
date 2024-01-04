/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const PATH = 0;
  const WALL = 1;
  const n = grid.length;

  if (grid[0][0] === WALL || grid[n - 1][n - 1] === WALL) return -1;

  const deltaX = [-1, 0, 1, 1, 1, 0, -1, -1];
  const deltaY = [-1, -1, -1, 0, 1, 1, 1, 0];

  const xQueue = [0];
  const yQueue = [0];
  let visitedCount = 1;

  while (xQueue.length > 0) {
    const { length } = xQueue;

    for (let i = 0; i < length; i += 1) {
      const col = xQueue.shift();
      const row = yQueue.shift();

      if (row === n - 1 && col === n - 1) return visitedCount;

      for (let i = 0; i < deltaX.length; i += 1) {
        const newCol = col + deltaX[i];
        const newRow = row + deltaY[i];
        const isOutOfGrid = newRow < 0 || newCol < 0 || newRow >= n || newCol >= n;

        if (!isOutOfGrid && grid[newRow][newCol] === PATH) {
          xQueue.push(newCol);
          yQueue.push(newRow);
          grid[newRow][newCol] = WALL;
        }
      }
    }

    visitedCount += 1;
  }

  return -1;
};
