// var fs = require('fs');

// exports.test = function(){
//   fs.readFile(archive.paths.list, 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//     var sites = data.split('\n').slice(0, -1);
//     for(var i = 0; i<sites.length; i++){
//       archive.downloadUrls(sites[i]);
//     }
//   });
// };

// exports.test();

var archive = require('./archive-helpers');
var fs = require('fs');
var crontab = require('node-crontab');

var jobId = crontab.scheduleJob("*/1 * * * *", function(){
  console.log("it's been one minute");
  fs.readFile(archive.paths.list, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    var sites = data.split('\n').slice(0, -1);
    for(var i = 0; i<sites.length; i++){
      archive.downloadUrls(sites[i]);
    }
  });
});
