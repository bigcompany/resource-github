var resource = require('resource');

var ghMschema = require('./github.mschema');
var ghCtrl = require('./lib/');

var github = module.exports = resource.define('github', {
  controller: ghCtrl,
  schema: ghMschema,
});

github.dependencies = {
  github: '*'
};

exports.github = github;
