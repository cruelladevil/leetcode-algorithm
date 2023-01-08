/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let max = 1;

  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];
    const pointMap = {};
    let samePointCount = 0;

    for (let j = i + 1; j < points.length; j += 1) {
      const [x2, y2] = points[j];

      if (x1 === x2 && y1 === y2) {
        samePointCount += 1;
      } else {
        let slope = (y2 - y1) / (x2 - x1);

        if (!Number.isFinite(slope)) {
          slope = 'vertical';
        } else if (Number.isNaN(slope)) {
          slope = 'horizontal';
        }

        pointMap[slope] = (pointMap[slope] ?? 1) + 1;
      }
    }

    const maxPointCount = Math.max(...Object.values(pointMap));

    max = Math.max(maxPointCount + samePointCount, max);
  }

  return max;
};
