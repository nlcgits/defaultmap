import DefaultMap from '@nextlevelcoder/DefaultMap';

let staticMap = new DefaultMap(7);
console.log(staticMap.get(1)); // 7
console.log(staticMap.get({})); // 7
console.log(staticMap.get([])); // 7

let dynamicMap = new DefaultMap((key) => key);
console.log(staticMap.get(1)); // 1
console.log(staticMap.get({})); // {}
console.log(staticMap.get([])); // []

