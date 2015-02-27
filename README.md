count-by.js
---

> Utility function to count number of arbitrary object properties in a list

__Install__

```javascript
npm install count-by
```
__Usage__

```javascript
var countBy = require('count-by');
var orders = [
  { id: 1, user: { name: 'Alice' } }
, { id: 2, user: { name: 'Bob' } }
, { id: 3, user: { name: 'Eve' } }
, { id: 4, user: { name: 'Alice' } }
];
var names = countBy(orders, 'user.name');
// { Alice: 2, Bob: 1, Eve: 1 }
```

__License__

MIT

