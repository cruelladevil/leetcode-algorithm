/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const targetColor = image[sr][sc];

  const fillImageFrom = function fill(row, col) {
    const isOutOfImage = row < 0 || col < 0 || row >= image.length || col >= image[0].length;

    if (isOutOfImage || image[row][col] === newColor || image[row][col] !== targetColor) return;

    image[row][col] = newColor;

    fill(row - 1, col);
    fill(row + 1, col);
    fill(row, col - 1);
    fill(row, col + 1);
  };

  fillImageFrom(sr, sc);

  return image;
};
