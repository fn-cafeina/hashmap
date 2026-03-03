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

    if (this.length() > this.capacity * this.loadFactor) {
      const entries = this.entries();
      this.capacity = this.capacity * 2;
      this.buckets = Array.from({ length: this.capacity }, () => []);

      for (let i = 0; i < entries.length; i++) {
        this.set(entries[i][0], entries[i][1]);
      }
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

  keys() {
    const buckets = this.buckets;
    const keys_ = [];

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length) {
        for (let j = 0; j < buckets[i].length; j++) {
          keys_.push(buckets[i][j].key);
        }
      }
    }

    return keys_;
  }

  values() {
    const buckets = this.buckets;
    const values_ = [];

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length) {
        for (let j = 0; j < buckets[i].length; j++) {
          values_.push(buckets[i][j].value);
        }
      }
    }

    return values_;
  }

  entries() {
    const buckets = this.buckets;
    const entries_ = [];

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length) {
        for (let j = 0; j < buckets[i].length; j++) {
          entries_.push([buckets[i][j].key, buckets[i][j].value]);
        }
      }
    }

    return entries_;
  }
}
