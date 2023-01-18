/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const flip = (arr) => arr.reverse();
  const invert = (arr) => arr.map((val) => val ^ 1);

  return image.map((row) => {
    const flipped = flip(row);
    return invert(flipped);
  });
};
