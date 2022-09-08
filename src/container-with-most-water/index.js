/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWaterAmount = 0;
  let maxHeight = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const curMaxHeight = Math.min(leftHeight, rightHeight);

    if (curMaxHeight > maxHeight) {
      const waterAmount = (right - left) * curMaxHeight;
      maxWaterAmount = Math.max(maxWaterAmount, waterAmount);
    }

    if (leftHeight < rightHeight) {
      left += 1;
    } else if (leftHeight > rightHeight) {
      right -= 1;
    } else {
      left += 1;
      right -= 1;
    }
  }

  return maxWaterAmount;
};
