/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// Index
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const cycle = 2 * (numRows - 1);
  let zigzagString = '';

  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; row + col < s.length; col += cycle) {
      const downwardChar = s.charAt(row + col);
      zigzagString += downwardChar;

      const isTop = row === 0;
      const isBottom = row === numRows - 1;
      const upwardIndex = cycle + (col - row);

      const hasUpwardChar = !isTop && !isBottom && upwardIndex < s.length;

      if (hasUpwardChar) {
        const upwardChar = s.charAt(upwardIndex);
        zigzagString += upwardChar;
      }
    }
  }

  return zigzagString;
};

// Matrix
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const zigzagRows = Array.from({ length: numRows }, () => []);
  let isDownward = true;
  let row = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    zigzagRows[row].push(char);
    row += isDownward ? 1 : -1;

    const isTop = row === 0;
    const isBottom = row === numRows - 1;

    if (isTop || isBottom) {
      isDownward = !isDownward;
    }
  }

  return zigzagRows.reduce(
    (zigzagString, currRow) => zigzagString + currRow.join(''),
    '',
  );
};
