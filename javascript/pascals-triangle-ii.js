/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const pascalRow = Array.from({ length: rowIndex + 1 }, () => 0);

  pascalRow[0] = 1;

  for (let i = 1; i < rowIndex + 1; i += 1) {
    for (let j = i; j >= 1; j -= 1) {
      pascalRow[j] += pascalRow[j - 1];
    }
  }

  return pascalRow;
};
