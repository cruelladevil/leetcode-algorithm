var MyCalendar = function () {
  this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let left = 0;
  let right = this.calendar.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const [s, e] = this.calendar[middle];

    if (s < end && e > start) return false;

    if (start >= e) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  this.calendar.splice(left, 0, [start, end]);

  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
