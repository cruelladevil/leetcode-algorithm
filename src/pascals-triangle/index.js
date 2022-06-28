/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ROOT = 1;
  const pascalTriangle = Array.from({ length: numRows }, (_, i) => {
    return Array.from({ length: i + 1 }, () => ROOT);
  });

  for (let i = 2; i < numRows; i += 1) {
    for (let j = 1; j < i; j += 1) {
      pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
  }

  return pascalTriangle;
};
