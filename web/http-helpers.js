var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "text/plain"
};

exports.serveAssets = function(res, asset, ct, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var html = path.join(__dirname, asset);
  fs.readFile(html, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    // console.log(data);
    headers['Content-Type'] = ct;
    res.writeHead(200, headers);
    res.end(data);
  });
};


// As you progress, keep thinking about what helper functions you can put here!
