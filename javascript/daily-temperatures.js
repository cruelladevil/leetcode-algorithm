/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const waitingWarmerDays = Array.from(temperatures, () => 0);
  const stack = [];

  for (let i = 0; i <= temperatures.length; i += 1) {
    const temperature = temperatures[i];

    while (temperatures[stack[stack.length - 1]] < temperature) {
      const index = stack.pop();
      waitingWarmerDays[index] = i - index;
    }

    stack.push(i);
  }

  return waitingWarmerDays;
};
