/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let node = new Node(val);
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) return null;
    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }

    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    let val = this.tail.val;
    this.tail = curr;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return null;
    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    let val = this.head.val;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) return null;
    if (idx >= this.length) return null;
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.head === null) return null;
    if (idx >= this.length) return null;
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    if (idx > this.length) return null;

    let curr = this.head;
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }
    let node = new Node(val);
    node.next = curr.next;
    curr.next = node;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length) return this.pop();
    if (idx > this.length) return null;

    let curr = this.head;
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }

    let val = curr.next.val;
    curr.next = curr.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) return 0;
    let s = 0;

    let curr = this.head;
    while (curr !== null) {
      s += curr.val;
      curr = curr.next;
    }
    return s / this.length;
  }

  /** traverse(): print all values in the list */

  traverse() {
    let statement = "";
    let curr = this.head;
    while (curr !== null) {
      statement += curr.val + (curr.next !== null ? " -> " : "");
      curr = curr.next;
    }
    console.log(statement);
  }
}

module.exports = LinkedList;
