var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../web/archives/sites'),
  'list' : path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(site, cb){
  fs.readFile(exports.paths.list, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    exports.isUrlInList(data, site, cb);
  });
};

exports.isUrlInList = function(content, targetSite, cb){
  var sites = content.split('\n').slice(0, -1);
  var contains = _.contains(sites, targetSite);
  if(contains){
    cb(true);
  } else{
    exports.addUrlToList(targetSite);
    cb(false);
  }
};

exports.addUrlToList = function(targetSite){
  fs.appendFile(exports.paths.list, targetSite + '\n', function(err, data){
    if(err){
      throw err;
    } else {
    }
  });
};

exports.isURLArchived = function(targetSite, callback){
  //find some way to check file structure

};

exports.downloadUrls = function(siteName){
  //issue get requests to various websites
  if (!fs.existsSync(exports.paths.archivedSites + '/' + siteName)){
    fs.mkdirSync(exports.paths.archivedSites + '/' + siteName);
    http.get("http://" + siteName, function(res) {
      console.log("Got response: " + res.statusCode);

      var data = '';
      res.on('data',function(chunk){
        data += chunk;
      });
      res.on('end',function(){
        var fileName = exports.paths.archivedSites + '/' + siteName +'/' + siteName + '.html';
        console.log(fileName);
        console.log(data);
        fs.writeFile(fileName, data, 'utf8', function() {
           console.log('done');
        });
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }
};
