/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combi = [];

  const backtrack = (start = 1, curr = []) => {
    if (curr.length === k) {
      combi.push([...curr]);
      return;
    }

    for (let i = start; i <= n; i += 1) {
      curr.push(i);
      backtrack(i + 1, curr);
      curr.pop();
    }
  };

  backtrack();

  return combi;
};
