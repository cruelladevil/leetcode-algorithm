/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];

  arr.forEach((v, i) => {
    if (fn(v, i)) result.push(v);
  });

  return result;
};
