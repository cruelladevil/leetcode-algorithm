/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// Recursion
var canVisitAllRooms = function (rooms) {
  const seens = Array.from(rooms, () => false);

  const dfs = (room) => {
    if (seens[room]) return;

    seens[room] = true;
    rooms[room].forEach((key) => {
      dfs(key);
    });
  };

  dfs(0);

  return seens.every((seen) => seen === true);
};

// Stack
var canVisitAllRooms = function (rooms) {
  const seens = Array.from(rooms, () => false);
  const stack = [];

  seens[0] = true;
  stack.push(0);

  while (stack.length > 0) {
    const curr = stack.pop();

    rooms[curr].forEach((key) => {
      if (!seens[key]) {
        seens[key] = true;
        stack.push(key);
      }
    });
  }

  return seens.every((seen) => seen === true);
};
