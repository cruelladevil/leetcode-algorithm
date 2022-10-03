/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let totalTime = 0;
  let currMaxTime = 0;

  for (let i = 0; i < colors.length; i += 1) {
    const curr = colors.charAt(i);
    const next = colors.charAt(i + 1);

    totalTime += neededTime[i];
    currMaxTime = Math.max(currMaxTime, neededTime[i]);

    if (curr !== next) {
      totalTime -= currMaxTime;
      currMaxTime = 0;
    }
  }

  return totalTime;
};
