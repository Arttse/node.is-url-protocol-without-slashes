# is-url-protocol-without-slashes
[![Coverage Status](https://coveralls.io/repos/github/Arttse/node.is-url-protocol-without-slashes/badge.svg?branch=master)](https://coveralls.io/github/Arttse/node.is-url-protocol-without-slashes?branch=master)

> Node.js module. Checks for the presence of URL protocol without a slashes (colon-slash-slash)

Version 2 requires Node.js >= 6.13.

## Install

```sh
# NPM
$ npm install is-url-protocol-without-slashes

# Yarn
$ yarn add is-url-protocol-without-slashes
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
[MIT](LICENSE) &copy; 2016-2019 Nikita Bystrov (Arttse)
