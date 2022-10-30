/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const MIN_DIGIT = 0;
  const MAX_DIGIT = 9;
  let max = MIN_DIGIT;

  for (let i = 0; i < n.length; i += 1) {
    const char = n.charAt(i);
    const digit = Number(char);
    max = Math.max(max, digit);
    if (max === MAX_DIGIT) return max;
  }

  return max;
};
