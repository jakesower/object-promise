# object-promise

Create a single promise out of an object that has values that may be promises.

## Installation

```
$ npm install object-promise
```

## Usage

``` javascript
var objectPromise = require('object-promise');

var obj = {
  a: Promise.resolve(3), // any promise is fine
  b: 4,                  // non promises are okay too
  c: Promise.resolve(5), // use any number of promises
};

objectPromise(obj).then(function (resolved) {
  // resolved will equal { a: 3, b: 4, c: 5 }
});
```
