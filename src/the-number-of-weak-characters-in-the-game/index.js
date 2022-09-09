/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort(([attackA, defenceA], [attackB, defenceB]) => {
    if (attackA === attackB) {
      return defenceA - defenceB;
    } else {
      return attackB - attackA;
    }
  });

  let maxDeffence = 0;
  let count = 0;

  properties.forEach(([_, deffence]) => {
    if (deffence < maxDeffence) count += 1;
    maxDeffence = Math.max(deffence, maxDeffence);
  });

  return count;
};
