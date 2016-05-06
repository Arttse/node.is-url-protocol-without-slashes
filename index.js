'use strict';

/** Modules */
const url = require ( 'url' );


/**
 * Checks for the presence of URL protocol without a slashes
 *
 * @param str - URL to check
 * @returns {boolean}
 */
module.exports = str => {

  if ( typeof str !== 'string' ) {

    throw new TypeError ( `Expected a string, not ${typeof str}` );

  }

  const urlObj = url.parse ( str );

  return Boolean ( urlObj.protocol ) && Boolean ( urlObj.slashes ) === false;

};
