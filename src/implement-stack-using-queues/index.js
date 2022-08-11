var MyStack = function () {
  this.queue = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.enqueue(x);

  const size = this.queue.size;

  for (let i = 0; i < size - 1; i += 1) {
    const deletedValue = this.queue.dequeue();
    this.queue.enqueue(deletedValue);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.head.value;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.head === null) return;

    const deletedValue = this.head.value;

    if (this.head.next === null) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size -= 1;

    return deletedValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}
