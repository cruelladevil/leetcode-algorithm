/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const visited = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right += 1) {
    const char = s[right];

    while (visited.has(char)) {
      visited.delete(s[left]);
      left += 1;
    }

    visited.add(char);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
