/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minDistance = Infinity;
  let smallestIndex = -1;

  points.forEach(([pX, pY], i) => {
    if (x === pX || y === pY) {
      const distance = Math.abs(x - pX) + Math.abs(y - pY);

      if (distance < minDistance) {
        minDistance = distance;
        smallestIndex = i;
      }
    }
  });

  return smallestIndex;
};
