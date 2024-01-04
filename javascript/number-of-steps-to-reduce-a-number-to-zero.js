/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  const divide = (number) => {
    if (number % 2 !== 0) return number - 1;
    return number / 2;
  };

  let number = num;
  let step = 0;

  while (number) {
    number = divide(number);
    step += 1;
  }

  return step;
};
