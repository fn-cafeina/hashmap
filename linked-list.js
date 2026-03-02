class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let pointer = this.head;
    while (pointer.nextNode) pointer = pointer.nextNode;
    pointer.nextNode = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    let previous = null;

    while (index--) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = current.nextNode;
  }
}
