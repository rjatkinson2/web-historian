var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
// require more modules/folders here!

var asset;

exports.handleRequest = function (req, res) {
  if(req.url === "/"){
    asset = './public/index.html';
    helpers.serveAssets(res,asset);
  }
  var targetSite = url.parse(req.url).query;
  // if(archive.readListOfUrls(targetSite)){
  //   // give archived page
  // }else{
  //   // give loading.html
  //   asset = './public/loading.html';
  //   helpers.serveAssets(res,asset);
  // }
  // res.writeHead(200, helpers.headers);
  // res.end();
  // return;
};
