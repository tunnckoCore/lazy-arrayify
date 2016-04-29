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

/**
 * > Check if value is array using the [isarray][] module.
 *
 * **Example**
 *
 * ```js
 * var isArray = require('lazy-arrayify').isArray
 *
 * console.log(isArray(1234))        // => false
 * console.log(isArray('str'))       // => false
 * console.log(isArray(null))        // => false
 * console.log(isArray())            // => false
 * console.log(isArray(0))           // => false
 * console.log(isArray(false))       // => false
 * console.log(isArray([null, 123])) // => true
 * console.log(isArray([null]))      // => true
 * console.log(isArray([false]))     // => true
 * ```
 *
 * @name   .isArray
 * @param  {Mixed} `val`
 * @return {Boolean}
 * @api public
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
 * var arrayify = require('lazy-arrayify').arrayify
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

module.exports = utils
