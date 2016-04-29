/*!
 * lazy-arrayify <https://github.com/tunnckoCore/lazy-arrayify>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var lazyArrayify = require('./index')

test('should return empty array on falsey values', function (done) {
  test.deepEqual(lazyArrayify(null), [])
  test.deepEqual(lazyArrayify(false), [])
  test.deepEqual(lazyArrayify(undefined), [])
  test.deepEqual(lazyArrayify(), [])
  test.deepEqual(lazyArrayify(0), [])
  test.deepEqual(lazyArrayify(''), [])
  done()
})

test('should return array if array given', function (done) {
  test.deepEqual(lazyArrayify(['']), [''])
  test.deepEqual(lazyArrayify([1, 2, 3]), [1, 2, 3])
  test.deepEqual(lazyArrayify([null, false]), [null, false])
  test.deepEqual(lazyArrayify([0, undefined]), [0, undefined])
  done()
})

test('should arrayify truthy values', function (done) {
  test.deepEqual(lazyArrayify(123), [123])
  test.deepEqual(lazyArrayify(true), [true])
  test.deepEqual(lazyArrayify('foo'), ['foo'])
  done()
})
