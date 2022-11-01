/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const STUCK = -1;
  const m = grid.length;
  const n = grid[0].length;

  const moveBall = (col) => {
    let currCol = col;

    for (let row = 0; row < m; row += 1) {
      const nextCol = currCol + grid[row][currCol];
      const isStuck = nextCol < 0 || nextCol >= n || grid[row][currCol] !== grid[row][nextCol];

      if (isStuck) return STUCK;

      currCol = nextCol;
    }

    return currCol;
  };

  const balls = Array.from({ length: n }, (_, col) => col);
  const result = balls.map((col) => moveBall(col));

  return result;
};
