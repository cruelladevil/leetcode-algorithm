/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const digits = [];
  let number = num;

  while (number !== 0) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }

  const [first, second, third, fourth] = digits.sort((a, b) => a - b);

  return (first + second) * 10 + third + fourth;
};
