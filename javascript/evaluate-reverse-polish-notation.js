/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operationMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  const stack = [];

  tokens.forEach((token) => {
    if (operationMap[token]) {
      const operator = operationMap[token];
      const num2 = stack.pop();
      const num1 = stack.pop();

      stack.push(operator(num1, num2));
    } else {
      stack.push(Number(token));
    }
  });

  return stack.pop();
};
