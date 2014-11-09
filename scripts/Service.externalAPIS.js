/**
* Provided under the MIT License (c) 2014
* See LICENSE @file for details.
*
* @file Service.externalAPIS.js
*
* @author juanvallejo
* @date 10/15/14
*
* Node.js server serving external api services
* Holds all external api library variables. These are loaded through external links
* 
*/

// declare Service.externalAPIS constants
var PORT 	= 8080;											// localhost port to bind application to

// load all Service apis
var fs 		= require('fs');								// import filesystem io package
var http 	= require('http');								// import http server package

// load all external product apis
var aws 	= require("aws-lib");							// load amazon products api


// create server to broadcast all external api libraries where needed
var server = http.createServer(function(req, res) {
	var test = JSON.stringify(aws);
	console.log(test);

	res.end('test');
});

// have server listen on port PORT
server.listen(PORT);