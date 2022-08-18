/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const map = {};

  arr.forEach((value) => {
    if (!map[value]) map[value] = 0;

    map[value] += 1;
  });

  const counts = Array.from({ length: arr.length + 1 }, () => 0);

  Object.values(map).forEach((freq) => {
    counts[freq] += 1;
  });

  const halfSizeOfArr = arr.length / 2;
  let curFreq = arr.length;
  let removedCount = 0;
  let removedSetCount = 0;

  while (removedCount < halfSizeOfArr) {
    while (counts[curFreq] === 0) {
      curFreq -= 1;
    }

    removedCount += curFreq;
    counts[curFreq] -= 1;
    removedSetCount += 1;
  }

  return removedSetCount;
};
