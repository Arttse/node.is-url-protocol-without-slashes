'use strict'

const { URL } = require('url')

module.exports = str => {
  if (typeof str !== 'string' || !str) {
    return false
  }

  try {
    const { href, protocol } = new URL(str)

    return href.indexOf(`${protocol}//`) !== 0
  } catch (e) {
    return false
  }
}
