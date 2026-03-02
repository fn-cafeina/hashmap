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

      const pointer = this.head;
      while (pointer.nextNode) pointer = pointer.nextNode;
      pointer.nextNode = node;
    }
  }
}
