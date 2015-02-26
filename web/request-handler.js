var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
// require more modules/folders here!

var asset, ct;

var requests = {
  "/": function(req, res){
    if(req.method === "GET"){
      asset = './public/index.html';
      ct = "text/html";
      helpers.serveAssets(res, asset, ct);
    }
    else if(req.method === "POST"){
      var data = '';
      req.on('data', function(chunks){
        data += chunks;
      });
      req.on('end', function(){
        var targetSite = data.split('=')[1];
        archive.readListOfUrls(targetSite, function(found) {
          if(!found){
            //send em to domo arigato, our mr. roboto
            res.statusCode = 302;
            res.setHeader("Location", "loading.html");
            res.end();
          } else {
            //render the page we have stored in the DB
            res.statusCode = 302;
            res.setHeader("Location", targetSite);
            res.end();
          }
        });
      });
    }
  },
  "/index.html": function(req, res){
    asset = './public/index.html';
    ct = "text/html";
    helpers.serveAssets(res, asset, ct);
  },
  "/styles.css": function(req, res){
    asset = './public/styles.css';
    ct = "text/css";
    helpers.serveAssets(res, asset, ct);
  },
  "/app.js": function(req, res){
    asset = './public/app.js';
    ct = "application/javascript";
    helpers.serveAssets(res, asset, ct);
  },
  "/jquery.js": function(req, res){
    asset = '../bower_components/jquery/dist/jquery.js';
    ct = "application/javascript";
    helpers.serveAssets(res, asset, ct);
  },
  "/loading.html": function(req, res) {
    asset = './public/loading.html';
    ct = 'text/html';
    helpers.serveAssets(res, asset, ct);
  },
  "/favicon.ico": function(req, res){
    res.writeHead(404,helpers.headers);
    res.end();
  }
};

exports.handleRequest = function (req, res) {
  console.log(req.method);
  if(requests[req.url]){
    requests[req.url](req,res);
  }else{
    // var targetSite = url.parse(req.url).query;
    //   // give archived page
    // archive.readListOfUrls(targetSite, function(found) {
    //   if(!found) {
    //     console.log('couldnt find file!');
    //     res.statusCode = 302;
    //     res.setHeader("Location", "loading.html");
    //     res.end(JSON.stringify({redirect: true, location: 'http://127.0.0.1/loading.html'}));
    //     // helpers.serveAssets(res, './public/loading.html', 'text/html');

    //   } else {
    //     //render the page we have stored in the DB
    //     //
    //   }
    // });
  }
};
