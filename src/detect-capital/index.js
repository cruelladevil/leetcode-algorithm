/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const isUpperCase = word === word.toUpperCase();
  const isLowerCase = word === word.toLowerCase();
  const isPascalCase =
    word === word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

  return isUpperCase || isLowerCase || isPascalCase;
};
