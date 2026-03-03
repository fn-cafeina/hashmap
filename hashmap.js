export default class HashMap {
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

  set(key, value) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    if (!bucket.length) {
      bucket.push({ key, value });
      return;
    }

    const idx = bucket.findIndex((i) => i.key === key);
    if (idx > -1) {
      bucket[idx].value = value;
    } else {
      bucket.push({ key, value });
    }
  }

  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const idx = bucket.findIndex((i) => i.key === key);
    if (idx > -1) return bucket[idx].value;

    return null;
  }

  has(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const idx = bucket.findIndex((i) => i.key === key);
    if (idx > -1) return true;

    return false;
  }

  remove(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const idx = bucket.findIndex((i) => i.key === key);
    if (bucket[idx]) {
      bucket.splice(idx, 1);
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
}
