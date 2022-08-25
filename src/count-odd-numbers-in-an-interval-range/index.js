/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  const count = high - low + 1;

  if (low % 2 === 1 && high % 2 === 1) {
    return (count + 1) / 2;
  }

  return Math.floor(count / 2);
};
