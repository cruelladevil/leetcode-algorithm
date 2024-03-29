var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;

  while (
    this.stack.length > 0 &&
    price >= this.stack[this.stack.length - 1].price
  ) {
    const prev = this.stack.pop();
    span += prev.span;
  }

  this.stack.push({ price, span });

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
