/**
 * Checks for the presence of URL protocol without a slashes (colon-slash-slash)
 *
 * @param str - string for check
 *
 * @returns true if it is a URL and protocol without slashes
 */
declare const isUrlProtocolWithoutSlashes: (str: string) => Boolean;
export default isUrlProtocolWithoutSlashes;
