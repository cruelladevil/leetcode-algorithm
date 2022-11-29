/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = Array.from({ length: n });
  this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey - 1] = value;

  const chunks = [];

  while (this.stream[this.pointer]) {
    chunks.push(this.stream[this.pointer]);
    this.pointer += 1;
  }

  return chunks;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
