# defaultmap
A map that sets a default value when an unset key is requested.

Just like a regular map, except you pass a default value to the constructor and that value is set whenever you try to get an unset key.

## Constructor

```js
const { DefaultMap } = require('@nextlevelcoder/DefaultMap');

let staticMap = new DefaultMap(7); // 7
console.log(staticMap.get(1)); // 7
console.log(staticMap.get({})); // 7
console.log(staticMap.get([])); // 7

let classMap = new DefaultMap(() => new SimpleState());
console.log(classMap.get('accountState')) // a new SimpleState instance
console.log(classMap.get('networkState')) // a new SimpleState instance

let dynamicMap = new DefaultMap((key) => key);
console.log(dynamicMap.get(1)); // 1
console.log(dynamicMap.get({})); // {}
console.log(dynamicMap.get([])); // []
```