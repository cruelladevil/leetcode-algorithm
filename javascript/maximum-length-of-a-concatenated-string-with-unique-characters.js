/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let maxLength = 0;

  const backtrack = (currString, index) => {
    maxLength = Math.max(maxLength, currString.length);

    for (let i = index; i < arr.length; i += 1) {
      const newString = arr[i];

      if (isUniqueChar(currString, newString)) {
        backtrack(currString + newString, i + 1);
      }
    }

    return maxLength;
  };

  const isUniqueChar = (currString, newString) => {
    const currCharSet = new Set(currString);
    const newCharSet = new Set();

    for (const char of newString) {
      if (newCharSet.has(char) || currCharSet.has(char)) {
        return false;
      }

      newCharSet.add(char);
    }

    return true;
  };

  return backtrack('', 0);
};
