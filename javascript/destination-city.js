/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const set = new Set();

  paths.forEach(([from]) => set.add(from));

  for (let i = 0; i < paths.length; i += 1) {
    const [, to] = paths[i];

    if (!set.has(to)) return to;
  }

  return '';
};
