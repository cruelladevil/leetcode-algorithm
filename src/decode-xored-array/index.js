/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const decoded = [first];

  encoded.forEach((code, i) => {
    const curr = decoded[i];
    const next = curr ^ code;
    decoded.push(next);
  });

  return decoded;
};
