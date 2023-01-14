/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const root = {};

  const find = (x) => {
    root[x] ??= x;

    if (root[x] !== x) {
      return find(root[x]);
    }
    return x;
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX.localeCompare(rootY) > 0) {
      root[rootX] = rootY;
    } else {
      root[rootY] = rootX;
    }
  };

  for (let i = 0; i < s1.length; i += 1) {
    union(s1.charAt(i), s2.charAt(i));
  }

  return Array.from(baseStr, (char) => find(char)).join('');
};
