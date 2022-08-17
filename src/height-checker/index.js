/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const counts = Array.from({ length: 101 }, () => 0);

  heights.forEach((height) => {
    counts[height] += 1;
  });

  let notInOrderCount = 0;
  let curHeight = 1;

  heights.forEach((height) => {
    while (counts[curHeight] === 0) {
      curHeight += 1;
    }

    if (height !== curHeight) {
      notInOrderCount += 1;
    }

    counts[curHeight] -= 1;
  });

  return notInOrderCount;
};
