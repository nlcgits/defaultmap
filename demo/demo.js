import DefaultMap from '@nextlevelcoder/DefaultMap';

let staticMap = new DefaultMap(7);
// 7
console.log(staticMap.get(1));
// 7
console.log(staticMap.get({}));
// 7
console.log(staticMap.get([]));

let dynamicMap = new DefaultMap((key) => key);
// 1
console.log(staticMap.get(1));
// {}
console.log(staticMap.get({}));
// []
console.log(staticMap.get([]));
