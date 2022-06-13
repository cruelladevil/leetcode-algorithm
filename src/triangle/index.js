/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let level = triangle.length - 2; level >= 0; level -= 1) {
    const parents = triangle[level];

    parents.forEach((_, i) => {
      const childs = triangle[level + 1];
      const leftChild = childs[i];
      const rightChild = childs[i + 1];
      parents[i] += Math.min(leftChild, rightChild);
    });
  }

  const minTotal = triangle[0];

  return minTotal;
};
