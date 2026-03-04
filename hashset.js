export default class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;

    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    if (!bucket.find((i) => i === key)) bucket.push(key);

    if (this.length() > this.capacity * this.loadFactor) {
      const keys = this.keys();
      this.capacity = this.capacity * 2;
      this.buckets = Array.from({ length: this.capacity }, () => []);

      for (let i = 0; i < keys.length; i++) {
        this.set(keys[i]);
      }
    }
  }

  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const key_ = bucket.find((i) => i === key);
    if (key_) return key_;

    return null;
  }

  has(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    return bucket.find((i) => i === key) ? true : false;
  }

  remove(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const index = bucket.findIndex((i) => i === key);
    if (bucket[index]) {
      bucket.splice(index, 1);
      return true;
    }

    return false;
  }

  length() {
    return this.buckets.reduce((curr, acc) => curr + acc.length, 0);
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  keys() {
    const buckets = this.buckets;
    const keys_ = [];

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length) {
        for (let j = 0; j < buckets[i].length; j++) {
          keys_.push(buckets[i][j]);
        }
      }
    }

    return keys_;
  }
}
