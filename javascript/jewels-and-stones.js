/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set(jewels);
  let jewelCount = 0;

  for (let i = 0; i < stones.length; i += 1) {
    const stone = stones.charAt(i);

    if (jewelSet.has(stone)) jewelCount += 1;
  }

  return jewelCount;
};
