/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  const getIndexOfBackspaceCleared = (string, index) => {
    const BACKSPACE = '#';
    if (string.charAt(index) !== BACKSPACE) return index;

    let skip = 0;
    let i = index;

    while (i >= 0) {
      if (string.charAt(i) === BACKSPACE) {
        skip += 1;
      } else if (skip > 0) {
        skip -= 1;
      } else break;

      i -= 1;
    }

    return i;
  };

  while (i >= 0 || j >= 0) {
    i = getIndexOfBackspaceCleared(s, i);
    j = getIndexOfBackspaceCleared(t, j);

    if (s.charAt(i) !== t.charAt(j)) return false;

    i -= 1;
    j -= 1;
  }

  return true;
};
