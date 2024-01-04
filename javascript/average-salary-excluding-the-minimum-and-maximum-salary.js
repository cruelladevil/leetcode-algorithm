/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

  salary.forEach((money) => {
    max = Math.max(max, money);
    min = Math.min(min, money);

    sum += money;
  });

  return (sum - max - min) / (salary.length - 2);
};
