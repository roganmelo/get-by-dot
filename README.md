# Get by dot

🌳 Get value from object using dot path

<a href="https://nodei.co/npm/get-by-dot/">
  <img src="https://nodei.co/npm/get-by-dot.png?downloads=true">
</a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/roganmelo/get-by-dot)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/get-by-dot/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import getByDot from 'get-by-dot';`

`getByDot({}, 'path');`


### Usage

```js
  import getByDot from 'get-by-dot';

  const obj = {
    a: { b: 'c' },
    b: [{ c: 'a' }]
  };

  getByDot(obj, 'a.b'); // c
  getByDot(obj, 'a'); // { b: 'c' }
  getByDot(obj, 'a.b.c'); // undefined
  getByDot(obj); // { a: { b: 'c' }, b: [{ c: 'a' }] };
```

#### ISC License (ISC)
