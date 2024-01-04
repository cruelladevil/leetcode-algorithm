/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let plantCount = 0;

  for (let i = 0; i < flowerbed.length; i += 1) {
    const left = i > 0 ? flowerbed[i - 1] : 0;
    const right = i < flowerbed.length - 1 ? flowerbed[i + 1] : 0;

    if (flowerbed[i] === 0 && left === 0 && right === 0) {
      plantCount += 1;
      i += 1;
    }

    if (plantCount >= n) return true;
  }

  return false;
};
