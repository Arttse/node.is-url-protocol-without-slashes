'use strict'

var url = require('url')

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string, not ' + typeof str)
  }

  var urlObj = url.parse(str)

  return Boolean(urlObj.protocol) && Boolean(urlObj.slashes) === false
}
