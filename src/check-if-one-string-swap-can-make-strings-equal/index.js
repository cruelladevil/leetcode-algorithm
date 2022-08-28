/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let diffCount = 0;
  let diffIndex1 = -1;
  let diffIndex2 = -1;

  for (let i = 0; i < s1.length; i += 1) {
    const charS1 = s1.charAt(i);
    const charS2 = s2.charAt(i);

    if (charS1 !== charS2) {
      diffCount += 1;

      if (diffCount === 1) {
        diffIndex1 = i;
      } else {
        diffIndex2 = i;
      }
    }

    if (diffCount > 2) return false;
  }

  const isPossibleToSwap =
    s1.charAt(diffIndex1) === s2.charAt(diffIndex2) &&
    s1.charAt(diffIndex2) === s2.charAt(diffIndex1);

  return diffCount === 0 || (diffCount === 2 && isPossibleToSwap);
};
