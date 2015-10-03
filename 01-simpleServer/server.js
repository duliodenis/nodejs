//
//  Simple HTTP Server
//  server.js
//
//  Created by Dulio Denis on 10/2/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Based on code from nodejs about:
//  https://nodejs.org/en/about/
//


// Required modules
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');


// Array of Available MIME types
var mimeTypes = {
    html:   "text/html",
    jpeg:   "image/jpeg",
    jpg:    "image/jpg",
    png:    "image/png",
    js:     "text/javascript",
    css:    "text/css"
};

http.createServer(function(req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), unescape(uri));
    console.log('Loading ' + uri);
    
    var stats;
    try { 
        stats = fs.lstatSync(filename);
    }
    catch(e) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
        return;
    }
    
    // Determine whether a file or directory
    if (stats.isFile()) {
        var mimeType = mimeTypes[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200, {'Content-type': mimeType });
        
        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);
        
    } else if (stats.isDirectory()) {
        res.writeHead(302, {'Location': 'index.html'});
        res.end();
    } else { // its neither a file or a directory
        res.writeHead(500, {'Location': 'text/plain'});
        res.write('500: Internal Error\n');
        res.end();
    }
                  
}).listen(3000);