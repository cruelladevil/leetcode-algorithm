/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;

  const parents = Array.from({ length: n }, (_, i) => i);

  const findParent = (i) => {
    if (parents[i] !== i) {
      parents[i] = findParent(parents[i]);
    }
    return parents[i];
  };

  const mergeParent = (a, b) => {
    const parentA = findParent(a);
    const parentB = findParent(b);

    if (parentA < parentB) {
      parents[parentB] = parents[parentA];
    } else {
      parents[parentA] = parents[parentB];
    }
  };

  connections.forEach(([a, b]) => {
    mergeParent(a, b);
  });

  let parentCount = 0;

  parents.forEach((v, i) => {
    if (v === i) parentCount += 1;
  });

  return parentCount - 1;
};
