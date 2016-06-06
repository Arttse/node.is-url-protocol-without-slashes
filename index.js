'use strict';

/** Modules */
var url = require ( 'url' );


/**
 * Checks for the presence of URL protocol without a slashes (colon-slash-slash)
 *
 * @param {String} str - URL to check
 * @returns {Boolean}
 */
module.exports = function ( str ) {

  if ( typeof str !== 'string' ) {

    throw new TypeError ( 'Expected a string, not ' + typeof str );

  }

  var urlObj = url.parse ( str );

  return Boolean ( urlObj.protocol ) && Boolean ( urlObj.slashes ) === false;

};
