/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const seens = Array.from({ length: n }, () => false);

  edges.forEach(([from, to]) => {
    seens[to] = true;
  });

  const neverSeens = [];

  seens.forEach((seen, i) => {
    if (!seen) neverSeens.push(i);
  });

  return neverSeens;
};
