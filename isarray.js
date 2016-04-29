/*!
 * lazy-utils <https://github.com/tunnckoCore/lazy-utils>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

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

module.exports = require('isarray')
