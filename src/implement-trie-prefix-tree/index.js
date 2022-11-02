class TrieNode {
  constructor() {
    this.child = new Map();
    this.isFinal = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currNode = this.root;

  for (let i = 0; i < word.length; i += 1) {
    const currChar = word.charAt(i);

    if (!currNode.child.has(currChar)) {
      currNode.child.set(currChar, new TrieNode());
    }

    currNode = currNode.child.get(currChar);
  }

  currNode.isFinal = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currNode = this.root;

  for (let i = 0; i < word.length; i += 1) {
    const currChar = word.charAt(i);

    if (!currNode.child.has(currChar)) {
      return false;
    }

    currNode = currNode.child.get(currChar);
  }

  return currNode.isFinal;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currNode = this.root;

  for (let i = 0; i < prefix.length; i += 1) {
    const currChar = prefix.charAt(i);

    if (!currNode.child.has(currChar)) {
      return false;
    }

    currNode = currNode.child.get(currChar);
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
