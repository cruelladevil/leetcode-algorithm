/**
 * @param {string} sentence
 * @return {boolean}
 */
// Set
var checkIfPangram = function (sentence) {
  const set = new Set();

  for (let i = 0; i < sentence.length; i += 1) {
    const char = sentence.charAt(i);
    set.add(char);

    if (set.size === 26) return true;
  }

  return false;
};

// Bit Manipulation
var checkIfPangram = function (sentence) {
  const max = (1 << 26) - 1;
  let seen = 0;

  for (let i = 0; i < sentence.length; i += 1) {
    const charIndex = sentence.charCodeAt(i) - 'a'.charCodeAt();
    const currBit = 1 << charIndex;
    seen |= currBit;

    if (seen === max) return true;
  }

  return false;
};
