/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const matches = items.filter(([type, color, name]) => {
    const ruleMap = { type, color, name };
    return ruleMap[ruleKey] === ruleValue;
  });

  return matches.length;
};
