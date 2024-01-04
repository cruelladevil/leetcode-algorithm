/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// DFS
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = Array.from({ length: n }, () => false);

  const dfs = (i) => {
    if (visited[i]) return;

    visited[i] = true;

    for (let j = 0; j < isConnected[i].length; j += 1) {
      if (!visited[j] && isConnected[i][j]) dfs(j);
    }
  };

  let count = 0;

  isConnected.forEach((_, i) => {
    if (!visited[i]) {
      dfs(i);
      count += 1;
    }
  });

  return count;
};

// Union-Find
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
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

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (isConnected[i][j]) mergeParent(i, j);
    }
  }

  let parentCount = 0;

  parents.forEach((parent, i) => {
    if (parent === i) parentCount += 1;
  });

  return parentCount;
};
