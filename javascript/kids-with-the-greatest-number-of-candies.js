/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandyCount = Math.max(...candies);
  return candies.map((candyCount) => candyCount + extraCandies >= maxCandyCount);
};
