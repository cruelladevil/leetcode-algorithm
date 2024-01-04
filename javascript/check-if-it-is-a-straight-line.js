/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [[x0, y0], [x1, y1]] = coordinates;
  const dx = x1 - x0;
  const dy = y1 - y0;

  return coordinates.every(([x, y]) => {
    const _dx = x - x0;
    const _dy = y - y0;
    return dx * _dy === dy * _dx;
  });
};
