/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0;

  for (let right = 0; right < t.length; right += 1) {
    if (s.charAt(left) === t.charAt(right)) {
      left += 1;
    }
  }

  return left === s.length;
};
