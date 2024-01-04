/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let decoded = s;

  const regexp = /(\d+)\[([a-z]+)\]/g;
  const replacer = (_, number, letter) => letter.repeat(number);

  while (decoded.includes('[')) {
    decoded = decoded.replace(regexp, replacer);
  }

  return decoded;
};
