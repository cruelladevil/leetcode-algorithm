/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const reshaped = Array.from({ length: r }, () => {
    return Array.from({ length: c });
  });

  let row = 0;
  let col = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      reshaped[row][col] = mat[i][j];
      col += 1;

      if (col === c) {
        col = 0;
        row += 1;
      }
    }
  }

  return reshaped;
};
