/*!
 * lazy-utils <https://github.com/tunnckoCore/lazy-utils>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('lazy-cache')(require)
var fn = require

require = utils // eslint-disable-line no-undef, no-native-reassign
require('isarray', 'isArray')
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

module.exports = function arrayify (val) {
  if (!val) return []
  if (!utils.isArray(val)) return [val]
  return val
}
