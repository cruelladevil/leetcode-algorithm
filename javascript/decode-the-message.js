/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const WHITE_SPACE = ' ';

  const map = { [WHITE_SPACE]: WHITE_SPACE };
  let valueCharCode = 'a'.charCodeAt();

  for (let i = 0; i < key.length; i += 1) {
    const keyChar = key.charAt(i);

    if (!map[keyChar]) {
      map[keyChar] = String.fromCharCode(valueCharCode);
      valueCharCode += 1;
    }
  }

  let decodedMessage = '';

  for (let i = 0; i < message.length; i += 1) {
    decodedMessage += map[message.charAt(i)];
  }

  return decodedMessage;
};
