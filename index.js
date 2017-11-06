'use strict';
//
// CloudMine, Inc.
// 2015
//

/**
 * Require your Snippets
 * This can be more expressive, for example, you can use `fs` to
 * read all snippets in a directory and set them to your `module.exports`.
 */

var gen = require('./lib/generate_objects');
var delete_all = require('./lib/delete_all');
var filter = require('./lib/filter');

var CloudMineNode = require('cloudmine-servercode');
// Require any other node module you want...

/**
 * The `module.exports` **must** be called before the server is started,
 * or the server won't be able to read in the exports.
 */
module.exports = {
  gen: gen,
  delete_all: delete_all,
  filter: filter
};

/**
 * Start the CloudMine server.
 */
CloudMineNode.start(module, './index.js', function(err) {
  console.log('Server Started?', err);
});
