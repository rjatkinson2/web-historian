var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
// require more modules/folders here!

var asset;

var requests = {
  "/": function(res){
    asset = './public/index.html';
    helpers.serveAssets(res, asset);
  },
  "/index.html": function(res){
    asset = './public/index.html';
    helpers.serveAssets(res, asset);
  },
  "/styles.css": function(res){
    asset = './public/styles.css';
    helpers.serveAssets(res, asset);
  },
  "/app.js": function(res){
    asset = './public/app.js';
    helpers.serveAssets(res, asset);
  },
  "/jquery.min.js": function(res){
    asset = '../bower_components/jquery/dist/jquery.min.js';
    helpers.serveAssets(res, asset);
  }
};

exports.handleRequest = function (req, res) {
  if(requests[req.url]){
    requests[req.url](res);
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
