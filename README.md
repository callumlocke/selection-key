# selection-key

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

Convert an array of integers into a short (ish), unique, URL-friendly key, and back again.

Useful if you need a key to represent a unique selection from a set of items – make an array containing only the integer IDs of the selected items, and then get a unique reversable string representing that set.


## Usage

```js
var selectionKey = require('selection-key');

var maxId = 100;
var selectedItems = [5, 6, 20, 24, 25, 47, 48, 51, 55, 60, 61, 77, 88, 90, 91, 92, 96];

var key = selectionKey(selectedItems, maxId); // 'O02C000P40.40BY00000'

var parsed = selectionKey.parse(key, maxId); // array of original items (sorted)
```


## Licence

MIT

[npm-image]: https://img.shields.io/npm/v/selection-key.svg?style=flat-square
[npm-url]: https://npmjs.org/package/selection-key
[travis-image]: https://img.shields.io/travis/callumlocke/selection-key.svg?style=flat-square
[travis-url]: https://travis-ci.org/callumlocke/selection-key
[downloads-image]: http://img.shields.io/npm/dm/selection-key.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/selection-key
