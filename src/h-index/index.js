/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length;
  const counts = Array.from({ length: n + 1 }, () => 0);

  citations.forEach((c) => {
    if (c > n) {
      counts[n] += 1;
    } else {
      counts[c] += 1;
    }
  });

  let paperCount = 0;

  for (let h = n; h >= 0; h -= 1) {
    paperCount += counts[h];

    if (paperCount >= h) return h;
  }

  return 0;
};
