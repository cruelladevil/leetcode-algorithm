/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = createGraph(tickets);

  return dfs(graph, 'JFK').reverse();
};

function createGraph(tickets) {
  const graph = {};

  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];

    graph[from].push(to);
  });

  Object.values(graph).forEach((value) => {
    value.sort((a, b) => (a < b ? 1 : -1));
  });

  return graph;
}

function dfs(graph, current, output = []) {
  const neighbors = graph[current] || [];

  while (neighbors.length > 0) {
    const next = neighbors.pop();
    dfs(graph, next, output);
  }

  output.push(current);

  return output;
}
