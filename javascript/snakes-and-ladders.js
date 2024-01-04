/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const last = n * n;
  const vistied = new Set();

  const getPosition = (num) => {
    let row = Math.floor((num - 1) / n);
    let col = (num - 1) % n;

    if (row % 2 === 1) col = n - 1 - col;
    row = n - 1 - row;

    return [row, col];
  };

  const queue = [[1, 0]];

  while (queue.length > 0) {
    const [position, moveCount] = queue.shift();

    for (let dice = 1; dice <= 6; dice += 1) {
      let next = position + dice;
      const [r, c] = getPosition(next);

      if (board[r][c] !== -1) next = board[r][c];
      if (next === last) return moveCount + 1;
      if (!vistied.has(next)) {
        vistied.add(next);
        queue.push([next, moveCount + 1]);
      }
    }
  }

  return -1;
};
