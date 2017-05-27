
const languages = require('./what3words/languages');
const reverse = require('./what3words/reverse');
const forward = require('./what3words/forward');
const errors = require('./what3words/forward');

/**
 * what3words API wrapper
 * @type {Object}
 */
module.exports = {
  languages,
  reverse,
  forward,
  errors,
};
