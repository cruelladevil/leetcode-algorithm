/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let diffCount = 0;
  let left = -1;
  let right = -1;

  for (let i = 0; i < s1.length; i += 1) {
    const s1Char = s1.charAt(i);
    const s2Char = s2.charAt(i);

    if (s1Char !== s2Char) {
      diffCount += 1;

      if (diffCount === 1) {
        left = i;
      } else {
        right = i;
      }
    }

    if (diffCount > 2) return false;
  }

  const isPossibleToSwap =
    diffCount === 2 &&
    s1.charAt(left) === s2.charAt(right) &&
    s1.charAt(right) === s2.charAt(left);

  return diffCount === 0 || isPossibleToSwap;
};
