/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const decodedSet = new Set();

  words.forEach((word) => {
    let decoded = '';

    for (let i = 0; i < word.length; i += 1) {
      const morseIndex = word.charCodeAt(i) - 'a'.charCodeAt();
      decoded += morseCodes[morseIndex];
    }

    decodedSet.add(decoded);
  });

  return decodedSet.size;
};
