/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const MARKED = -1;
  const m = mat.length;
  const n = mat[0].length;

  const rowQueue = new Queue();
  const colQueue = new Queue();

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (mat[row][col] === 0) {
        rowQueue.enqueue(row);
        colQueue.enqueue(col);
      } else {
        mat[row][col] = MARKED;
      }
    }
  }

  const deltaRows = [-1, 1, 0, 0];
  const deltaCols = [0, 0, -1, 1];
  const len = deltaRows.length;

  while (!rowQueue.isEmpty()) {
    const row = rowQueue.dequeue();
    const col = colQueue.dequeue();

    for (let i = 0; i < len; i += 1) {
      const newRow = row + deltaRows[i];
      const newCol = col + deltaCols[i];
      const isOutOfMatrix =
        newRow < 0 || newCol < 0 || newRow >= m || newCol >= n;

      if (!isOutOfMatrix && mat[newRow][newCol] === MARKED) {
        rowQueue.enqueue(newRow);
        colQueue.enqueue(newCol);
        mat[newRow][newCol] = mat[row][col] + 1;
      }
    }
  }

  return mat;
};
