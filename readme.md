# is-url-protocol-without-slashes [![GitHub version](https://badge.fury.io/gh/Arttse%2Fnode.is-url-protocol-without-slashes.svg)](https://github.com/Arttse/node.is-url-protocol-without-slashes/releases/latest) [![npm version](https://badge.fury.io/js/is-url-protocol-without-slashes.svg)](https://www.npmjs.com/package/is-url-protocol-without-slashes) [![Build Status](https://travis-ci.org/Arttse/node.is-url-protocol-without-slashes.svg?branch=master)](https://travis-ci.org/Arttse/node.is-url-protocol-without-slashes)

> Node.js module. Checks for the presence of URL protocol without a slashes


## Install

```
$ npm install -S is-url-protocol-without-slashes
```


## Usage

```js
const isUrlProtocolWithoutSlashes = require('is-url-protocol-without-slashes');

isUrlProtocolWithoutSlashes('mailto:info@mail.com');
//=> true

isUrlProtocolWithoutSlashes('tel:9008007060');
//=> true

isUrlProtocolWithoutSlashes('http://test.com');
//=> false

isUrlProtocolWithoutSlashes('tg://addstickers?set=example');
//=> false
```


## License

MIT © Nikita «Arttse» Bystrov