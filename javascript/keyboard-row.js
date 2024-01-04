/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const firstRowSet = new Set('qwertyuiop');
  const secondRowSet = new Set('asdfghjkl');
  const thirdRowSet = new Set('zxcvbnm');
  const rowSets = [firstRowSet, secondRowSet, thirdRowSet];
  const result = [];

  words.forEach((word) => {
    const charSet = new Set(word.toLowerCase());

    rowSets.forEach((rowSet) => {
      if ([...charSet].every((char) => rowSet.has(char))) {
        result.push(word);
      }
    });
  });

  return result;
};
