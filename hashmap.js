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

    const index = bucket.findIndex((element) => element.key === key);
    if (index > -1) {
      bucket[index].value = value;
    } else {
      bucket.push({ key, value });
    }
  }

  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const index = bucket.findIndex((element) => element.key === key);
    if (index > -1) return bucket[index].value;

    return null;
  }

  has(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    const index = bucket.findIndex((element) => element.key === key);
    if (index > -1) return true;

    return false;
  }
}
