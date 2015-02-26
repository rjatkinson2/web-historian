var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  var targetSite = url.parse(req.url).query;
  archive.readListOfUrls(targetSite);
  res.writeHead(200, helpers.headers);
  res.end(archive.paths.list);
};
