/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelSet = new Set('aeiouAEIOU');
  const chars = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s.charAt(left);
    const rightChar = s.charAt(right);

    if (vowelSet.has(leftChar) && vowelSet.has(rightChar)) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left += 1;
      right -= 1;
    } else if (vowelSet.has(rightChar)) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return chars.join('');
};
