/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstString = strs[0];

  for (let i = 0; i < firstString.length; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      const currString = strs[j];

      if (currString.charAt(i) !== firstString.charAt(i)) {
        return firstString.slice(0, i);
      }
    }
  }

  return firstString;
};
