/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const COLOR_SET = new Set('RGB');
  const ROD_COUNT = 10;

  const rods = Array.from({ length: ROD_COUNT }, () => new Set());

  for (let i = 0; i < rings.length; i += 2) {
    const [color, index] = rings.slice(i, i + 2);

    const ringSet = rods[index];
    ringSet.add(color);
  }

  return rods.reduce((point, ringSet) => {
    return ringSet.size === COLOR_SET.size ? point + 1 : point;
  }, 0);
};
