var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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
  var sites = content.split('\n').slice(0,-1);
  var contains = _.contains(sites, targetSite);
  console.log(sites);
  console.log(targetSite);
  console.log(contains);
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

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
