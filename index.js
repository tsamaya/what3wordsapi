const what3words = require('what3words-api-nodejs-client');
/**
 * what3words API wrapper
 * @type {Object}
 */
module.exports = {
  languages: what3words.languages,
  reverse: what3words.reverse,
  forward: what3words.forward,
  errors: what3words.errors,
};
