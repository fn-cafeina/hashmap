import HashMap from "./hashmap.js";
import HashSet from "./hashset.js";

const hMap = new HashMap();

hMap.set("apple", "red");
hMap.set("banana", "yellow");
hMap.set("carrot", "orange");
hMap.set("dog", "brown");
hMap.set("elephant", "gray");
hMap.set("frog", "green");
hMap.set("grape", "purple");
hMap.set("hat", "black");
hMap.set("ice cream", "white");
hMap.set("jacket", "blue");
hMap.set("kite", "pink");
hMap.set("lion", "golden");

console.log(hMap.buckets);

hMap.set("moon", "silver");

console.log(hMap.buckets);

console.log(hMap.get("banana"));
console.log(hMap.has("apple"));
console.log(hMap.remove("frog"));
console.log(hMap.length());
console.log(hMap.keys());
console.log(hMap.values());
console.log(hMap.entries());
hMap.clear();

console.log(hMap.buckets);

const hSet = new HashSet();

hSet.set("apple");
hSet.set("banana");
hSet.set("carrot");
hSet.set("dog");
hSet.set("elephant");
hSet.set("frog");
hSet.set("grape");
hSet.set("hat");
hSet.set("ice cream");
hSet.set("jacket");
hSet.set("kite");
hSet.set("lion");

console.log(hSet.buckets);

hSet.set("moon");

console.log(hSet.buckets);

console.log(hSet.get("banana"));
console.log(hSet.has("apple"));
console.log(hSet.remove("frog"));
console.log(hSet.length());
console.log(hSet.keys());
hSet.clear();

console.log(hSet.buckets);
