/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  const gcd = (a, b) => {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  };

  return str1.slice(0, gcd(str1.length, str2.length));
};
