/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const tmp = image.map((colors) => [...colors]);
  const originalColor = tmp[sr][sc];

  const fill = (img, row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= img.length ||
      col >= img[0].length ||
      img[row][col] === newColor ||
      img[row][col] !== originalColor
    ) {
      return;
    }

    img[row][col] = newColor;

    fill(img, row - 1, col);
    fill(img, row + 1, col);
    fill(img, row, col - 1);
    fill(img, row, col + 1);
  };

  fill(tmp, sr, sc);

  return tmp;
};
