# [lazy-arrayify][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url]  

> We are lazy, also [lazy-cache][]-d and [browserify][]-ready - just arrayify, falsey values returns empty array. In bonus with `.isArray` method.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i lazy-arrayify --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const lazyArrayify = require('lazy-arrayify')
```

### [isArray](index.js#L52)
> Check if value is array using the [isarray][] module.

**Params**

* `val` **{Mixed}**    
* `returns` **{Boolean}**  

**Example**

```js
var isArray = require('lazy-arrayify').isArray

console.log(isArray(1234))        // => false
console.log(isArray('str'))       // => false
console.log(isArray(null))        // => false
console.log(isArray())            // => false
console.log(isArray(0))           // => false
console.log(isArray(false))       // => false
console.log(isArray([null, 123])) // => true
console.log(isArray([null]))      // => true
console.log(isArray([false]))     // => true
```

### [.arrayify](index.js#L83)
> Returns empty array on falsey values.

**Params**

* `val` **{Mixed}**    
* `returns` **{Array}**  

**Example**

```js
var arrayify = require('lazy-arrayify').arrayify

console.log(arrayify(1234))        // => [1234]
console.log(arrayify('str'))       // => ['str']
console.log(arrayify(null))        // => []
console.log(arrayify())            // => []
console.log(arrayify(0))           // => []
console.log(arrayify(false))       // => []
console.log(arrayify([null, 123])) // => [null, 123]
console.log(arrayify([false]))     // => [false]
```

## Related
* [arrify](https://www.npmjs.com/package/arrify): Convert a value to an array | [homepage](https://github.com/sindresorhus/arrify)
* [isarray](https://www.npmjs.com/package/isarray): Array#isArray for older browsers | [homepage](https://github.com/juliangruber/isarray)
* [limon](https://www.npmjs.com/package/limon): The pluggable JavaScript lexer on per character basis. | [homepage](https://github.com/limonjs/limon)
* [limon-prev-next](https://www.npmjs.com/package/limon-prev-next): Plugin for [limon][] pluggable lexer that adds `prev` and `next` methods. | [homepage](https://github.com/limonjs/limon-prev-next)
* [postjson](https://www.npmjs.com/package/postjson): Transforming JSON with plugins. | [homepage](https://github.com/postjson/postjson)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/lazy-arrayify/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[lazy-cache]: https://github.com/jonschlinkert/lazy-cache
[browserify]: https://github.com/substack/node-browserify
[limon]: https://github.com/limonjs/limon
[isarray]: https://github.com/juliangruber/isarray

[npmjs-url]: https://www.npmjs.com/package/lazy-arrayify
[npmjs-img]: https://img.shields.io/npm/v/lazy-arrayify.svg?label=lazy-arrayify

[license-url]: https://github.com/tunnckoCore/lazy-arrayify/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/lazy-arrayify.svg

[downloads-url]: https://www.npmjs.com/package/lazy-arrayify
[downloads-img]: https://img.shields.io/npm/dm/lazy-arrayify.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/lazy-arrayify
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/lazy-arrayify.svg

[travis-url]: https://travis-ci.org/tunnckoCore/lazy-arrayify
[travis-img]: https://img.shields.io/travis/tunnckoCore/lazy-arrayify/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/lazy-arrayify
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/lazy-arrayify.svg

[david-url]: https://david-dm.org/tunnckoCore/lazy-arrayify
[david-img]: https://img.shields.io/david/tunnckoCore/lazy-arrayify.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

