/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const capacityRemains = capacity.map((cap, i) => cap - rocks[i]);
  const ascendingCapacityRemains = [...capacityRemains].sort((a, b) => a - b);
  let spareRockCount = additionalRocks;
  let fullCapacityBagCount = 0;

  for (let i = 0; i < ascendingCapacityRemains.length; i += 1) {
    if (spareRockCount >= ascendingCapacityRemains[i]) {
      spareRockCount -= ascendingCapacityRemains[i];
      fullCapacityBagCount += 1;
    } else {
      return fullCapacityBagCount;
    }
  }

  return fullCapacityBagCount;
};
