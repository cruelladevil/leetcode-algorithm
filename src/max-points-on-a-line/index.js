/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let max = 1;

  const getSlope = (pointA, pointB) => {
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;
    const slope = (y2 - y1) / (x2 - x1);

    return Math.abs(slope) === Infinity ? 'vertical' : slope;
  };

  for (let i = 0; i < points.length; i += 1) {
    const pointA = points[i];
    const pointMap = {};

    for (let j = i + 1; j < points.length; j += 1) {
      const pointB = points[j];
      const slope = getSlope(pointA, pointB);
      pointMap[slope] = (pointMap[slope] ?? 1) + 1;
    }

    const maxPointCount = Math.max(...Object.values(pointMap));
    max = Math.max(maxPointCount, max);
  }

  return max;
};
