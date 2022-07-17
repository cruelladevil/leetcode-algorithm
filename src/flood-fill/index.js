/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;
  const targetColor = image[sr][sc];

  const fillImageFrom = function fill(row, col) {
    const isOutOfImage = row < 0 || col < 0 || row >= m || col >= n;

    if (isOutOfImage || image[row][col] !== targetColor || image[row][col] === color) return;

    image[row][col] = color;

    fill(row - 1, col);
    fill(row + 1, col);
    fill(row, col - 1);
    fill(row, col + 1);
  };

  fillImageFrom(sr, sc);

  return image;
};
