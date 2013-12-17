var resource = require('resource'),
github = resource.define('github');



github.dependencies = {
  github: '*'
};

exports.github = github;
