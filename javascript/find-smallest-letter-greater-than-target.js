/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const char = letters[middle];

    if (char.localeCompare(target) <= 0) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return letters[left % letters.length];
};
