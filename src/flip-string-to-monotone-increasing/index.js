/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let oneCount = 0;
  let filpCount = 0;

  for (const char of s) {
    if (char === '1') {
      oneCount += 1;
    } else {
      filpCount += 1;
    }

    filpCount = Math.min(oneCount, filpCount);
  }

  return filpCount;
};
