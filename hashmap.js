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

    console.log(this.buckets.length);

    if (!bucket.length) {
      bucket.push({ key, value });
      return;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    bucket.push({ key, value });
  }
}
