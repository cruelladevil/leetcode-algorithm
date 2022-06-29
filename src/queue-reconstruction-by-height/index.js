/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort(([h1, k1], [h2, k2]) => {
    if (h1 === h2) return k1 - k2;

    return h2 - h1;
  });

  const result = [];

  people.forEach(([h, k]) => {
    result.splice(k, 0, [h, k]);
  });

  return result;
};
