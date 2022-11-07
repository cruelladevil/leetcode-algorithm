/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let number = num;
  let digitIndex = 0;
  let firstSixIndex = -1;

  while (number !== 0) {
    const digit = number % 10;
    if (digit === 6) {
      firstSixIndex = digitIndex;
    }

    number = Math.floor(number / 10);
    digitIndex += 1;
  }

  if (firstSixIndex === -1) return num;

  return num + 3 * Math.pow(10, firstSixIndex);
};
