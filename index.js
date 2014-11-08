'use strict';

var radixer = require('radixer');

var CHUNK_LENGTH = 64; // bits

var selectionKey = function (items, max) {
  var chunkIndex, bitString, i, l, offset, item; 

  if (!Array.isArray(items))
    throw new TypeError('Expected 1st argument to be an array');

  if (typeof max !== 'number')
    throw new TypeError('Expected 2nd argument to be a number');

  // items = items.sort(function (a, b) {
  //   return a - b;
  // });

  // validate items
  for (i = 0, l = items.length; i < l; i++) {
    item = items[i];
    if (typeof item !== 'number' || item > max)
      throw new Error('Array contained invalid item');
  }

  var keyChunks = [];
  var numChunks = Math.ceil(max / CHUNK_LENGTH);

  for (chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
    bitString = '';

    offset = (chunkIndex * CHUNK_LENGTH);
    for (i = 0 + offset, l = CHUNK_LENGTH + offset; i < l; i++) {
      bitString += (items.indexOf(i) === -1) ? '0' : '1';
    }

    keyChunks[chunkIndex] = radixer.numberToString(
      parseInt(bitString, 2)
    );
  }

  return keyChunks.join('.');
};

var parse = function (key, max) {
  var chunkIndex, l, i, offset;

  var keyChunks = key.split('.');
  var numChunks = keyChunks.length;
  var items = [];

  for (chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
    var bitString = radixer.stringToNumber(keyChunks[chunkIndex])
      .toString(2);

    var padAmount = CHUNK_LENGTH - bitString.length;
    for (i = 0; i < padAmount; i++) {
      bitString = '0' + bitString;
    }

    offset = (chunkIndex * CHUNK_LENGTH);
    for (i = 0, l = CHUNK_LENGTH; i < l; i++) {
      if (bitString.charAt(i) === '1') items.push(i + offset);
    }
  }

  return items;
};

module.exports = selectionKey;
module.exports.parse = parse;
