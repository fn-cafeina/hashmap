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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
}
