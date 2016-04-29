/*!
 * lazy-arrayify <https://github.com/tunnckoCore/lazy-arrayify>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var lazy = require('./index')
var arrayify = require('./arrayify')
var isarray = require('./isarray')

test('should expose `.arrayify` and `.isArray` methods', function (done) {
  test.strictEqual(typeof lazy.arrayify, 'function')
  test.strictEqual(typeof lazy.isArray, 'function')
  test.strictEqual(typeof arrayify, 'function')
  test.strictEqual(typeof isarray, 'function')
  test.strictEqual(isarray(), false)
  test.strictEqual(isarray(0), false)
  test.strictEqual(isarray(null), false)
  test.strictEqual(isarray([]), true)
  test.strictEqual(isarray([null]), true)
  test.strictEqual(isarray([1, 2, 3]), true)
  done()
})

test('should return empty array on falsey values', function (done) {
  test.deepEqual(lazy.arrayify(null), [])
  test.deepEqual(lazy.arrayify(false), [])
  test.deepEqual(lazy.arrayify(undefined), [])
  test.deepEqual(lazy.arrayify(), [])
  test.deepEqual(lazy.arrayify(0), [])
  test.deepEqual(lazy.arrayify(''), [])
  test.deepEqual(arrayify(null), [])
  test.deepEqual(arrayify(false), [])
  test.deepEqual(arrayify(undefined), [])
  test.deepEqual(arrayify(), [])
  test.deepEqual(arrayify(0), [])
  test.deepEqual(arrayify(''), [])
  done()
})

test('should return array if array given', function (done) {
  test.deepEqual(lazy.arrayify(['']), [''])
  test.deepEqual(lazy.arrayify([1, 2, 3]), [1, 2, 3])
  test.deepEqual(lazy.arrayify([null, false]), [null, false])
  test.deepEqual(lazy.arrayify([0, undefined]), [0, undefined])
  test.deepEqual(arrayify(['']), [''])
  test.deepEqual(arrayify([1, 2, 3]), [1, 2, 3])
  test.deepEqual(arrayify([null, false]), [null, false])
  test.deepEqual(arrayify([0, undefined]), [0, undefined])
  done()
})

test('should arrayify truthy values', function (done) {
  test.deepEqual(lazy.arrayify(123), [123])
  test.deepEqual(lazy.arrayify(true), [true])
  test.deepEqual(lazy.arrayify('foo'), ['foo'])
  test.deepEqual(arrayify(123), [123])
  test.deepEqual(arrayify(true), [true])
  test.deepEqual(arrayify('foo'), ['foo'])
  done()
})
