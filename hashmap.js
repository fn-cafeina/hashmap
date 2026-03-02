import LinkedList from "./linked-list.js";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;

    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    bucket.append({ key, value });

    let current = bucket.head;
    let index = 0;
    while (current.nextNode) {
      if (current.value.key === key) bucket.removeAt(index);

      current = current.nextNode;
      index++;
    }
  }
}
