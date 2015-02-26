var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
// require more modules/folders here!

var asset, ct;

var requests = {
  "/": function(res){
    asset = './public/index.html';
    ct = "text/html";
    helpers.serveAssets(res, asset, ct);
  },
  "/index.html": function(res){
    asset = './public/index.html';
    ct = "text/html";
    helpers.serveAssets(res, asset, ct);
  },
  "/styles.css": function(res){
    asset = './public/styles.css';
    ct = "text/css";
    helpers.serveAssets(res, asset, ct);
  },
  "/app.js": function(res){
    asset = './public/app.js';
    ct = "application/javascript";
    helpers.serveAssets(res, asset, ct);
  },
  "/jquery.js": function(res){
    asset = '../bower_components/jquery/dist/jquery.js';
    ct = "application/javascript";
    helpers.serveAssets(res, asset, ct);
  },
  "/favicon.ico": function(res){
    res.writeHead(404,helpers.headers);
    res.end();
  }
};

exports.handleRequest = function (req, res) {
  if(requests[req.url]){
    requests[req.url](res);
  }else{
    var targetSite = url.parse(req.url).query;
      // give archived page
    archive.readListOfUrls(targetSite, function(found) {
      if(!found) {
        console.log('couldnt find file!');
        helpers.serveAssets(res, './public/loading.html', 'text/html');
      } else {
        //render the page we have stored in the DB
      }
    });
  }
};
