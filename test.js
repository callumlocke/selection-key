/*jshint expr: true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var selectionKey = require('./index');

var random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

describe('selection-key', function () {
  it('works', function () {
    var max = 400;

    var items = [5, 15, 20, 3, 4];

    var key = selectionKey(items, max);
    console.log('KEY:', key);

    expect(selectionKey.parse(key, max)).to.deep.equal(
      items.sort(function (a, b) {
        return a - b;
      })
    );
  });
});
