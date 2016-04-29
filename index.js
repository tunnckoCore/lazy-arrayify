/*!
 * lazy-arrayify <https://github.com/tunnckoCore/lazy-arrayify>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require)

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign

/**
 * Lazily required module dependencies
 */

require('isarray', 'isArray')

/**
 * Restore `require`
 */

require = fn // eslint-disable-line no-undef, no-native-reassign

/**
 * > Returns empty array on falsey values.
 *
 * **Example**
 *
 * ```js
 * var arrayify = require('lazy-arrayify')
 *
 * console.log(arrayify(1234))        // => [1234]
 * console.log(arrayify('str'))       // => ['str']
 * console.log(arrayify(null))        // => []
 * console.log(arrayify())            // => []
 * console.log(arrayify(0))           // => []
 * console.log(arrayify(false))       // => []
 * console.log(arrayify([null, 123])) // => [null, 123]
 * console.log(arrayify([false]))     // => [false]
 * ```
 *
 * @name   lazyArrayify
 * @param  {Mixed} `val`
 * @return {Array}
 * @api public
 */

utils.arrayify = function arrayify (val) {
  if (!val) return []
  if (!utils.isArray(val)) return [val]
  return val
}

/**
 * Expose `utils` modules
 */

module.exports = utils.arrayify
