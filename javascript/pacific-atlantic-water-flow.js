/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const FLOW = 1;
  const NOT_FLOW = 0;
  const MIN_HEIGHT = 0;
  const m = heights.length;
  const n = heights[0].length;
  const pacific = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => NOT_FLOW);
  });
  const atlantic = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => NOT_FLOW);
  });

  const backflow = (ocean, row, col, prev) => {
    const isOutOfGrid = row < 0 || col < 0 || row >= m || col >= n;
    if (isOutOfGrid || ocean[row][col] === FLOW) return;
    const curr = heights[row][col];
    if (curr < prev) return;

    ocean[row][col] = FLOW;

    backflow(ocean, row - 1, col, curr);
    backflow(ocean, row + 1, col, curr);
    backflow(ocean, row, col - 1, curr);
    backflow(ocean, row, col + 1, curr);
  };

  for (let row = 0; row < m; row += 1) {
    backflow(pacific, row, 0, MIN_HEIGHT);
    backflow(atlantic, row, n - 1, MIN_HEIGHT);
  }

  for (let col = 0; col < n; col += 1) {
    backflow(pacific, 0, col, MIN_HEIGHT);
    backflow(atlantic, m - 1, col, MIN_HEIGHT);
  }

  const bothFlows = [];

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (pacific[row][col] === FLOW && atlantic[row][col] === FLOW) {
        bothFlows.push([row, col]);
      }
    }
  }

  return bothFlows;
};
