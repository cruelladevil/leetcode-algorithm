/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];

  const dfs = (node, path = []) => {
    const currPath = [...path, node];

    if (node === graph.length - 1) {
      result.push(currPath);
      return;
    }

    graph[node].forEach((edge) => {
      dfs(edge, currPath);
    });
  };

  dfs(0);

  return result;
};
