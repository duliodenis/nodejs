//
//  Simple HTTP Server
//  server.js
//
//  Created by Dulio Denis on 10/2/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Code from nodejs about:
//  https://nodejs.org/en/about/
//

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');