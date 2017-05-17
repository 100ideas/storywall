var moment = require('moment');
var system = require('system');
var page = require('webpage').create();
var urls = ['http://localhost:3000/rasterize', 'http://localhost:3000/create', 'http://localhost:3000/', 'http://localhost:3000/about', 'https://www.google.com']

page.onResourceError = function(resourceError) {
  console.log('\033[1;31m' + 'Error (#' + resourceError.id + '): URL: ' + request.url.substr(0,80) + ' || ' + resourceError.errorCode + ' || Description: ' + resourceError.errorString + '\033[0m');
};

page.onResourceTimeout = function(request) {
  console.log('\033[1;33m' + 'Timeout (#' + request.id + '): ' + request.url.substr(0,80) + '\033[0m');
};

page.onResourceRequested = function(request) {
  console.log('\033[0;36m' + '--> Request (#' + request.id + '): ' + request.url.substr(0,80) + '\033[0m');
};

page.onResourceReceived = function(response) {
  console.log('\033[1;34m' + '<-- Response (#' + response.id + '): ' + response.url.substr(0,80) + '\033[0m');
};

page.viewportSize = { width: 500, height: 1000 };

page.clipRect = {top:0, left:0, width: 384, height: 1000};

//  dpi option? https://github.com/ariya/phantomjs/issues/13553
// page.dpi=203;
page.dpi=72;

page.paperSize = {
  width: '384px',
  height: '900px',
  // width: '48mm',
  // height: '200mm',
};

// Old Chrome version without woff2 support
// page.settings.userAgent = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36";
page.settings.resourceTimeout = 3000;

page.open(urls[system.args[1]], function (status)
{
  if(status !== 'success') {
    console.log('Unable to load the address!');
    phantom.exit(1);
  } else {
    window.setTimeout(function () {
      var d = moment().format('YYMMDD_HHMMss')

      page.render('/Users/macowell/Desktop/phantom/' + d + '-203dpi' + '.jpg', {quality: 100, format: 'jpeg'});
      // page.render('/Users/macowell/Desktop/phantom/' + d + '-203dpi' + '.ppm', {quality: 100, format: 'ppm'});
      page.render('/Users/macowell/Desktop/phantom/' + d + '-203dpi' + '.pdf', {quality: 100, format: 'pdf'});
      phantom.exit();
    }, 3000)
  }
});

// var url = 'http://localhost:3000/'

// setTimeout(function(){
//   var clipRect = page.evaluate(function () {
//       return document.getElementById('paper').getBoundingClientRect();
//   });
//
//   page.clipRect = {
//       top:    clipRect.top,
//       left:   clipRect.left,
//       width:  clipRect.width,
//       height: clipRect.height
//   };



// page.open(url, function(status) {
//   if (status !== 'success') {
//       console.log('Unable to load the address!');
//       phantom.exit(1);
//   } else {
//     window.setTimeout(function () {
//       // dpi option? https://github.com/ariya/phantomjs/issues/13553
//       // page.dpi=203;
//       // page.render(`test203dpi-$(Date.now()).pdf`);
//       page.render('test203dpi-' + Date.now() + '.pdf');
//       phantom.exit();
//     }, 200);
//   }
// })
