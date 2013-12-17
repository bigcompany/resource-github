/**
 * @fileOverview The controller.
 */
var gh = require('github');

var github = module.exports = {};


github.activity = function activity (options, callback) {
  var conn = new gh({
    version: '3.0.0'
  });

  if (options.authenticate) {
    conn.authenticate(options.authenticate);
  }

  //
  // TODO: better conditional logic for determing user / org / project / etc
  //
  if (typeof options.user !== 'undefined' && options.user.length > 0) {
    return conn.events.getFromUser({
      user: options.user
    }, function(err, result) {
      callback(err, result);
    });
  }

  if (typeof options.org !== 'undefined' && options.org.length > 0) {
    return conn.events.getFromOrg({
      org: options.org
    }, function(err, result) {
      callback(err, result);
    });
  }

  callback(new Error('nothing to get'));
};
